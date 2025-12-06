import { CcfullstackAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useCcfullstackDecrementMutation } from '../data-access/use-ccfullstack-decrement-mutation'

export function CcfullstackUiButtonDecrement({ account, ccfullstack }: { account: UiWalletAccount; ccfullstack: CcfullstackAccount }) {
  const decrementMutation = useCcfullstackDecrementMutation({ account, ccfullstack })

  return (
    <Button variant="outline" onClick={() => decrementMutation.mutateAsync()} disabled={decrementMutation.isPending}>
      Decrement
    </Button>
  )
}
