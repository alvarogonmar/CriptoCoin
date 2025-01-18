import { useCryptoStore } from "../store";
import { currencies } from "../data";
import { useState } from "react";

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const [pair, setPair] = useState({
    currency: "",
    crytocurrency: "",
  });

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Currency: </label>
        <select name="currency" id="currency">
          <option value="currency">-- Select --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency: </label>
        <select name="cryptocurrency" id="cryptocurrency">
          <option value="">-- Select --</option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Check Crypto" />
    </form>
  );
}
