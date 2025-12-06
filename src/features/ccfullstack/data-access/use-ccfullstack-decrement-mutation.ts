import { CcfullstackAccount, getDecrementInstruction } from '@project/anchor'
import { useMutation } from '@tanstack/react-query'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { toastTx } from '@/components/toast-tx'
import { useCcfullstackAccountsInvalidate } from './use-ccfullstack-accounts-invalidate'

export function useCcfullstackDecrementMutation({
  account,
  ccfullstack,
}: {
  account: UiWalletAccount
  ccfullstack: CcfullstackAccount
}) {
  const invalidateAccounts = useCcfullstackAccountsInvalidate()
  const signer = useWalletUiSigner({ account })
  const signAndSend = useWalletUiSignAndSend()

  return useMutation({
    mutationFn: async () => await signAndSend(getDecrementInstruction({ ccfullstack: ccfullstack.address }), signer),
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
