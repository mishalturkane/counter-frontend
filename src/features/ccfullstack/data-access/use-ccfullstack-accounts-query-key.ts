import { useSolana } from '@/components/solana/use-solana'

export function useCcfullstackAccountsQueryKey() {
  const { cluster } = useSolana()

  return ['ccfullstack', 'accounts', { cluster }]
}
