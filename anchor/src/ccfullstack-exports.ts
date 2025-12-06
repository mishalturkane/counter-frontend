// Here we export some useful types and functions for interacting with the Anchor program.
import { Account, getBase58Decoder, SolanaClient } from 'gill'
import { getProgramAccountsDecoded } from './helpers/get-program-accounts-decoded'
import { Ccfullstack, CCFULLSTACK_DISCRIMINATOR, CCFULLSTACK_PROGRAM_ADDRESS, getCcfullstackDecoder } from './client/js'
import CcfullstackIDL from '../target/idl/ccfullstack.json'

export type CcfullstackAccount = Account<Ccfullstack, string>

// Re-export the generated IDL and type
export { CcfullstackIDL }

export * from './client/js'

export function getCcfullstackProgramAccounts(rpc: SolanaClient['rpc']) {
  return getProgramAccountsDecoded(rpc, {
    decoder: getCcfullstackDecoder(),
    filter: getBase58Decoder().decode(CCFULLSTACK_DISCRIMINATOR),
    programAddress: CCFULLSTACK_PROGRAM_ADDRESS,
  })
}
