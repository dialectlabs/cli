import { Flags } from '@oclif/core';

export const keypairFlag = Flags.file({
  char: 'k',
  description: 'Filepath to a keypair',
  required: true,
});
