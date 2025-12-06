import { CcfullstackAccount, getSetInstruction } from '@project/anchor'
import { useMutation } from '@tanstack/react-query'
import { UiWalletAccount, useWalletUiSigner } from '@wallet-ui/react'
import { useWalletUiSignAndSend } from '@wallet-ui/react-gill'
import { toastTx } from '@/components/toast-tx'
import { useCcfullstackAccountsInvalidate } from './use-ccfullstack-accounts-invalidate'

export function useCcfullstackSetMutation({ account, ccfullstack }: { account: UiWalletAccount; ccfullstack: CcfullstackAccount }) {
  const invalidateAccounts = useCcfullstackAccountsInvalidate()
  const signAndSend = useWalletUiSignAndSend()
  const signer = useWalletUiSigner({ account })

  return useMutation({
    mutationFn: async (value: number) =>
      await signAndSend(
        getSetInstruction({
          ccfullstack: ccfullstack.address,
          value,
        }),
        signer,
      ),
    onSuccess: async (tx) => {
      toastTx(tx)
      await invalidateAccounts()
    },
  })
}
