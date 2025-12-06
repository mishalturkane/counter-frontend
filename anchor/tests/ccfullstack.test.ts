import {
  Blockhash,
  createSolanaClient,
  createTransaction,
  generateKeyPairSigner,
  Instruction,
  isSolanaError,
  KeyPairSigner,
  signTransactionMessageWithSigners,
} from 'gill'
import {
  fetchCcfullstack,
  getCloseInstruction,
  getDecrementInstruction,
  getIncrementInstruction,
  getInitializeInstruction,
  getSetInstruction,
} from '../src'
// @ts-ignore error TS2307 suggest setting `moduleResolution` but this is already configured
import { loadKeypairSignerFromFile } from 'gill/node'

const { rpc, sendAndConfirmTransaction } = createSolanaClient({ urlOrMoniker: process.env.ANCHOR_PROVIDER_URL! })

describe('ccfullstack', () => {
  let payer: KeyPairSigner
  let ccfullstack: KeyPairSigner

  beforeAll(async () => {
    ccfullstack = await generateKeyPairSigner()
    payer = await loadKeypairSignerFromFile(process.env.ANCHOR_WALLET!)
  })

  it('Initialize Ccfullstack', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getInitializeInstruction({ payer: payer, ccfullstack: ccfullstack })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSER
    const currentCcfullstack = await fetchCcfullstack(rpc, ccfullstack.address)
    expect(currentCcfullstack.data.count).toEqual(0)
  })

  it('Increment Ccfullstack', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getIncrementInstruction({
      ccfullstack: ccfullstack.address,
    })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchCcfullstack(rpc, ccfullstack.address)
    expect(currentCount.data.count).toEqual(1)
  })

  it('Increment Ccfullstack Again', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getIncrementInstruction({ ccfullstack: ccfullstack.address })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchCcfullstack(rpc, ccfullstack.address)
    expect(currentCount.data.count).toEqual(2)
  })

  it('Decrement Ccfullstack', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getDecrementInstruction({
      ccfullstack: ccfullstack.address,
    })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchCcfullstack(rpc, ccfullstack.address)
    expect(currentCount.data.count).toEqual(1)
  })

  it('Set ccfullstack value', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getSetInstruction({ ccfullstack: ccfullstack.address, value: 42 })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    const currentCount = await fetchCcfullstack(rpc, ccfullstack.address)
    expect(currentCount.data.count).toEqual(42)
  })

  it('Set close the ccfullstack account', async () => {
    // ARRANGE
    expect.assertions(1)
    const ix = getCloseInstruction({
      payer: payer,
      ccfullstack: ccfullstack.address,
    })

    // ACT
    await sendAndConfirm({ ix, payer })

    // ASSERT
    try {
      await fetchCcfullstack(rpc, ccfullstack.address)
    } catch (e) {
      if (!isSolanaError(e)) {
        throw new Error(`Unexpected error: ${e}`)
      }
      expect(e.message).toEqual(`Account not found at address: ${ccfullstack.address}`)
    }
  })
})

// Helper function to keep the tests DRY
let latestBlockhash: Awaited<ReturnType<typeof getLatestBlockhash>> | undefined
async function getLatestBlockhash(): Promise<Readonly<{ blockhash: Blockhash; lastValidBlockHeight: bigint }>> {
  if (latestBlockhash) {
    return latestBlockhash
  }
  return await rpc
    .getLatestBlockhash()
    .send()
    .then(({ value }) => value)
}
async function sendAndConfirm({ ix, payer }: { ix: Instruction; payer: KeyPairSigner }) {
  const tx = createTransaction({
    feePayer: payer,
    instructions: [ix],
    version: 'legacy',
    latestBlockhash: await getLatestBlockhash(),
  })
  const signedTransaction = await signTransactionMessageWithSigners(tx)
  return await sendAndConfirmTransaction(signedTransaction)
}
