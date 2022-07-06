import { DappAddress } from '@dialectlabs/sdk';
import { PublicKey } from '@solana/web3.js';
import { uniqWith } from 'lodash';

export function getUniqueUsers(addresses: DappAddress[]): PublicKey[] {
  // Users = set of unique wallets, associated with enabled dapp addresses, associated with verified addresses
  const enabledAndVerifiedWallets = addresses
    .filter((address) => address.enabled)
    .filter((address) => address.address.verified)
    .map((address) => address.address.wallet.publicKey);
  return uniqWith(enabledAndVerifiedWallets, (pk1, pk2) => pk1.equals(pk2));
}
