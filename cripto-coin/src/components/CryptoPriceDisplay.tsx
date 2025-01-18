import { useMemo } from "react";
import { useCryptoStore } from "../store";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);

  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Price Tracker</h2>
          <div className="result">
            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="Cryptocurrency image"
            />
            <div>
              <p>
                Price: <span>{result.PRICE}</span>
              </p>
              <p>
                High Day Price: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Low Day Price: <span>{result.LOWDAY}</span>
              </p>
              <p>
                24h Change (%): <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Last Updated: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
