import { create } from "zustand"
import axios from "axios"
import { CryptoCurrencyResponseSchema } from "./schema/crypto-schema"

async function getCryptos() {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrencyResponseSchema.safeParse(Data)
    if(result.success) {
        return result.data
    }
}
export const useCryptoStore = create((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
}))