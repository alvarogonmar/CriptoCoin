import { useMemo } from "react";
import { useCryptoStore } from "../store";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);

  return (
    <div>
      {hasResult && (
        <>
          <h2>Price Tracker</h2>
          <div className="result">
            <div>
              <p>
                Price: <span>{result.PRICE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
