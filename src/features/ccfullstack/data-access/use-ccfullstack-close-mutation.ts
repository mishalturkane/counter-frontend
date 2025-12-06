import { CcfullstackAccount, getCloseInstruction } from '@project/anchor'
import { useMutation } from '@tanstack/react-query'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { toastTx } from '@/components/toast-tx'
import { useCcfullstackAccountsInvalidate } from './use-ccfullstack-accounts-invalidate'

export function useCcfullstackCloseMutation({ account, ccfullstack }: { account: UiWalletAccount; ccfullstack: CcfullstackAccount }) {
  const invalidateAccounts = useCcfullstackAccountsInvalidate()
  const signAndSend = useWalletUiSignAndSend()
  const signer = useWalletUiSigner({ account })

  return useMutation({
    mutationFn: async () => {
      return await signAndSend(getCloseInstruction({ payer: signer, ccfullstack: ccfullstack.address }), signer)
    },
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
