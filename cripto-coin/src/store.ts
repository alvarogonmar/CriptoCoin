import { create } from "zustand"
import axios from "axios"
import { CryptoCurrencyResponseSchema } from "./schema/crypto-schema"
import { Cryptocurrency } from "./types"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency
    fetchCryptos: () => Promise<void>
}

async function getCryptos() {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrencyResponseSchema.safeParse(Data)
    if(result.success) {
        return result.data
    }
}
export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
}))