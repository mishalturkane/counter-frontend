import { useSolana } from '@/components/solana/use-solana'
import { useQuery } from '@tanstack/react-query'
import { getCcfullstackProgramAccounts } from '@project/anchor'
import { useCcfullstackAccountsQueryKey } from './use-ccfullstack-accounts-query-key'

export function useCcfullstackAccountsQuery() {
  const { client } = useSolana()

  return useQuery({
    queryKey: useCcfullstackAccountsQueryKey(),
    queryFn: async () => await getCcfullstackProgramAccounts(client.rpc),
  })
}
