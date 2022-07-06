import { Dialect } from '@dialectlabs/sdk';
import { CliUx, Command, Flags } from '@oclif/core';
import { envFlag, keypairFlag, sdkEnvFromEnvFlag } from '../../shared/flags';
import { createWalletFromFile } from '../../shared/wallet';
import { getUniqueUsers } from './utils';

export default class Broadcast extends Command {
  static description = 'Command broadcasts message to dapp subscribers';

  static examples = [
    '<%= config.bin %> <%= command.id %>  -t "message title" -m "message title" -k key.json',
  ];

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
    keypair: keypairFlag,
    env: envFlag,
  };

  static args = [];

  public async run(): Promise<void> {
    const { flags } = await this.parse(Broadcast);

    const wallet = await createWalletFromFile(flags.keypair!);

    const sdk = Dialect.sdk({
      wallet,
      environment: sdkEnvFromEnvFlag(flags.env),
    });

    const dapp = await sdk.dapps.find();
    if (!dapp) {
      throw new Error(
        `You don't have dapp associated with your public key: ${sdk.wallet.publicKey}`,
      );
    }

    this.log('Dapp public address:', dapp.publicKey.toString());

    CliUx.ux.action.start('fetching addresses');

    const addresses = (await dapp.dappAddresses.findAll()).filter(
      (addr) => addr.enabled && addr.address.verified,
    );

    CliUx.ux.action.stop(`found ${addresses.length} addresses`);

    if (addresses.length === 0) {
      return;
    }

    const uniqueUsers = getUniqueUsers(addresses);

    const confirmed = await CliUx.ux.confirm(
      `Message preview: 
${flags.title}
${flags.message}
to ${uniqueUsers.length} users having ${addresses.length} addresses? [y/n]`,
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
