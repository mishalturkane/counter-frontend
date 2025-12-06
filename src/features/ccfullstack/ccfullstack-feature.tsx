import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { CcfullstackUiButtonInitialize } from './ui/ccfullstack-ui-button-initialize'
import { CcfullstackUiList } from './ui/ccfullstack-ui-list'
import { CcfullstackUiProgramExplorerLink } from './ui/ccfullstack-ui-program-explorer-link'
import { CcfullstackUiProgramGuard } from './ui/ccfullstack-ui-program-guard'

export default function CcfullstackFeature() {
  const { account } = useSolana()

  return (
    <CcfullstackUiProgramGuard>
      <AppHero
        title="Ccfullstack"
        subtitle={
          account
            ? "Initialize a new ccfullstack onchain by clicking the button. Use the program's methods (increment, decrement, set, and close) to change the state of the account."
            : 'Select a wallet to run the program.'
        }
      >
        <p className="mb-6">
          <CcfullstackUiProgramExplorerLink />
        </p>
        {account ? (
          <CcfullstackUiButtonInitialize account={account} />
        ) : (
          <div style={{ display: 'inline-block' }}>
            <WalletDropdown />
          </div>
        )}
      </AppHero>
      {account ? <CcfullstackUiList account={account} /> : null}
    </CcfullstackUiProgramGuard>
  )
}
