import { Backend, Dialect } from '@dialectlabs/sdk';
import { CliUx, Command, Flags } from '@oclif/core';
import {
  envFlag,
  keypairFlag,
  modeFlag,
  sdkEnvFromEnvFlag,
} from '../../shared/flags';
import { createWalletFromFile } from '../../shared/wallet';

export default class Broadcast extends Command {
  static description = 'Command sends messages to multiples accounts';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    title: Flags.string({
      char: 't',
      description: 'Message title',
      required: true,
    }),
    message: Flags.string({
      char: 'm',
      description: 'Message to send',
      required: true,
    }),
    mode: modeFlag,
    keypair: keypairFlag,
    env: envFlag,
  };

  static args = [];

  public async run(): Promise<void> {
    const { flags } = await this.parse(Broadcast);

    const backends = [];
    if (flags.mode === 'cloud') {
      backends.push(Backend.DialectCloud);
    }

    if (flags.mode === 'solana') {
      backends.push(Backend.Solana);
    }

    const wallet = await createWalletFromFile(flags.keypair!);

    const sdk = Dialect.sdk({
      wallet,
      environment: sdkEnvFromEnvFlag(flags.env),
      backends: backends,
    });

    const dapp = await sdk.dapps.find();
    if (!dapp) {
      throw new Error(
        `You don't have dapp associated with your public key: ${sdk.wallet.publicKey}`,
      );
    }

    this.log('Dapp public address:', dapp.publicKey.toString());

    CliUx.ux.action.start('fetching addresses');

    const addresses = await dapp.dappAddresses.findAll();

    CliUx.ux.action.stop(`found ${addresses.length} addresses`);

    if (addresses.length === 0) {
      return;
    }

    const confirmed = await CliUx.ux.confirm(
      `Message preview: 
${flags.title}
${flags.message}
to ${addresses.length} addresses? [y/n]`,
    );

    if (!confirmed) {
      return;
    }

    CliUx.ux.action.start('sending message');

    await dapp.messages.send({
      title: flags.title,
      message: flags.message,
    });

    CliUx.ux.action.stop('sending message');
  }
}
