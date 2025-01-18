import { useCryptoStore } from "../store";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);

  return (
    <div>
      <h2>Price Tracker</h2>
      <div className="result">
        <div>
          <p>
            Price: <span>{result.PRICE}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
