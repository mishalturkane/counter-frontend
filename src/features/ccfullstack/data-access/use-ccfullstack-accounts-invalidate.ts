import { useQueryClient } from '@tanstack/react-query'
import { useCcfullstackAccountsQueryKey } from './use-ccfullstack-accounts-query-key'

export function useCcfullstackAccountsInvalidate() {
  const queryClient = useQueryClient()
  const queryKey = useCcfullstackAccountsQueryKey()

  return () => queryClient.invalidateQueries({ queryKey })
}
