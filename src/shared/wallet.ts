import {
  DialectWalletAdapter,
  NodeDialectWalletAdapter,
} from '@dialectlabs/sdk';
import { Keypair } from '@solana/web3.js';
import { readFile } from 'node:fs/promises';

export async function keypairFromFile(keypairPath: string): Promise<Keypair> {
  const privateKey = await readFile(keypairPath);
  return Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(privateKey.toString())),
  );
}

export function createWalletFromKeypair(
  keypair: Keypair,
): DialectWalletAdapter {
  return new NodeDialectWalletAdapter(keypair);
}

export async function createWalletFromFile(
  keypairPath: string,
): Promise<DialectWalletAdapter> {
  return createWalletFromKeypair(await keypairFromFile(keypairPath));
}
