import { Button } from '@/components/ui/button'
import { UiWalletAccount } from '@wallet-ui/react'

import { useCcfullstackInitializeMutation } from '@/features/ccfullstack/data-access/use-ccfullstack-initialize-mutation'

export function CcfullstackUiButtonInitialize({ account }: { account: UiWalletAccount }) {
  const mutationInitialize = useCcfullstackInitializeMutation({ account })

  return (
    <Button onClick={() => mutationInitialize.mutateAsync()} disabled={mutationInitialize.isPending}>
      Initialize Ccfullstack {mutationInitialize.isPending && '...'}
    </Button>
  )
}
