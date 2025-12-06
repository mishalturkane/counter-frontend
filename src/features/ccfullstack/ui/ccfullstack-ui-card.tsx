import { CcfullstackAccount } from '@project/anchor'
import { ellipsify, UiWalletAccount } from '@wallet-ui/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { CcfullstackUiButtonClose } from './ccfullstack-ui-button-close'
import { CcfullstackUiButtonDecrement } from './ccfullstack-ui-button-decrement'
import { CcfullstackUiButtonIncrement } from './ccfullstack-ui-button-increment'
import { CcfullstackUiButtonSet } from './ccfullstack-ui-button-set'

export function CcfullstackUiCard({ account, ccfullstack }: { account: UiWalletAccount; ccfullstack: CcfullstackAccount }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ccfullstack: {ccfullstack.data.count}</CardTitle>
        <CardDescription>
          Account: <AppExplorerLink address={ccfullstack.address} label={ellipsify(ccfullstack.address)} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 justify-evenly">
          <CcfullstackUiButtonIncrement account={account} ccfullstack={ccfullstack} />
          <CcfullstackUiButtonSet account={account} ccfullstack={ccfullstack} />
          <CcfullstackUiButtonDecrement account={account} ccfullstack={ccfullstack} />
          <CcfullstackUiButtonClose account={account} ccfullstack={ccfullstack} />
        </div>
      </CardContent>
    </Card>
  )
}
