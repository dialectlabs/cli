import { Environment } from '@dialectlabs/sdk';
import { Flags } from '@oclif/core';

export const EnvFlagOptions = {
  LocalDev: 'local-dev',
  Dev: 'dev',
  Production: 'prod',
} as const;

export type EnvFlagOptionValues =
  typeof EnvFlagOptions[keyof typeof EnvFlagOptions];

export const envFlag = Flags.enum({
  options: [
    EnvFlagOptions.LocalDev,
    EnvFlagOptions.Dev,
    EnvFlagOptions.Production,
  ],
  default: EnvFlagOptions.Production,
});

export function sdkEnvFromEnvFlag(flagValue: EnvFlagOptionValues): Environment {
  switch (flagValue) {
    case EnvFlagOptions.LocalDev:
      return 'local-development';
    case EnvFlagOptions.Dev:
      return 'development';
    case EnvFlagOptions.Production:
      return 'production';
  }
}
