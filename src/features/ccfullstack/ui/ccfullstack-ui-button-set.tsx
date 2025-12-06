import { CcfullstackAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useCcfullstackSetMutation } from '@/features/ccfullstack/data-access/use-ccfullstack-set-mutation'

export function CcfullstackUiButtonSet({ account, ccfullstack }: { account: UiWalletAccount; ccfullstack: CcfullstackAccount }) {
  const setMutation = useCcfullstackSetMutation({ account, ccfullstack })

  return (
    <Button
      variant="outline"
      onClick={() => {
        const value = window.prompt('Set value to:', ccfullstack.data.count.toString() ?? '0')
        if (!value || parseInt(value) === ccfullstack.data.count || isNaN(parseInt(value))) {
          return
        }
        return setMutation.mutateAsync(parseInt(value))
      }}
      disabled={setMutation.isPending}
    >
      Set
    </Button>
  )
}
