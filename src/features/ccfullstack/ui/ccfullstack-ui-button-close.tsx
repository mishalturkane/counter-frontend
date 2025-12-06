import { CcfullstackAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useCcfullstackCloseMutation } from '@/features/ccfullstack/data-access/use-ccfullstack-close-mutation'

export function CcfullstackUiButtonClose({ account, ccfullstack }: { account: UiWalletAccount; ccfullstack: CcfullstackAccount }) {
  const closeMutation = useCcfullstackCloseMutation({ account, ccfullstack })

  return (
    <Button
      variant="destructive"
      onClick={() => {
        if (!window.confirm('Are you sure you want to close this account?')) {
          return
        }
        return closeMutation.mutateAsync()
      }}
      disabled={closeMutation.isPending}
    >
      Close
    </Button>
  )
}
