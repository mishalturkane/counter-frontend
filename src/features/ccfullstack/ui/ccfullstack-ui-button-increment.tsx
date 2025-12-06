import { CcfullstackAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'
import { useCcfullstackIncrementMutation } from '../data-access/use-ccfullstack-increment-mutation'

export function CcfullstackUiButtonIncrement({ account, ccfullstack }: { account: UiWalletAccount; ccfullstack: CcfullstackAccount }) {
  const incrementMutation = useCcfullstackIncrementMutation({ account, ccfullstack })

  return (
    <Button variant="outline" onClick={() => incrementMutation.mutateAsync()} disabled={incrementMutation.isPending}>
      Increment
    </Button>
  )
}
