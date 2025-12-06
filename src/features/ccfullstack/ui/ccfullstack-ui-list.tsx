import { CcfullstackUiCard } from './ccfullstack-ui-card'
import { useCcfullstackAccountsQuery } from '@/features/ccfullstack/data-access/use-ccfullstack-accounts-query'
import { UiWalletAccount } from '@wallet-ui/react'

export function CcfullstackUiList({ account }: { account: UiWalletAccount }) {
  const ccfullstackAccountsQuery = useCcfullstackAccountsQuery()

  if (ccfullstackAccountsQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!ccfullstackAccountsQuery.data?.length) {
    return (
      <div className="text-center">
        <h2 className={'text-2xl'}>No accounts</h2>
        No accounts found. Initialize one to get started.
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {ccfullstackAccountsQuery.data?.map((ccfullstack) => (
        <CcfullstackUiCard account={account} key={ccfullstack.address} ccfullstack={ccfullstack} />
      ))}
    </div>
  )
}
