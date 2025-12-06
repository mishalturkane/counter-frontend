import { CcfullstackAccount, getIncrementInstruction } from '@project/anchor'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { useMutation } from '@tanstack/react-query'
import { toastTx } from '@/components/toast-tx'
import { useCcfullstackAccountsInvalidate } from './use-ccfullstack-accounts-invalidate'

export function useCcfullstackIncrementMutation({
  account,
  ccfullstack,
}: {
  account: UiWalletAccount
  ccfullstack: CcfullstackAccount
}) {
  const invalidateAccounts = useCcfullstackAccountsInvalidate()
  const signAndSend = useWalletUiSignAndSend()
  const signer = useWalletUiSigner({ account })

  return useMutation({
    mutationFn: async () => await signAndSend(getIncrementInstruction({ ccfullstack: ccfullstack.address }), signer),
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
