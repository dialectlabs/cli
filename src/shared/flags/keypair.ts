import { Flags } from '@oclif/core';
import path from 'node:path';

export const keypairFlag = Flags.file({
  char: 'k',
  description: 'Filepath to a keypair',
  default: process.env.HOME
    ? path.resolve(process.env.HOME, '.config/solana/id.json')
    : 'id.json',
  required: true,
});
