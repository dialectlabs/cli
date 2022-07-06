import { Flags } from '@oclif/core';

export const modeFlag = Flags.enum({
  options: ['cloud', 'solana'],
  default: 'cloud',
});
