import { useState, useEffect } from "react";
import style from "./BitcoinLoader.module.scss";
import currencies from "../supportedCurrencies.json";
import Card from "../components/Card/Card";
import { currentRateData, fetchData } from "../services/bitcoin-service";

import LineChart from "../components/Chart/LineChart";

// http://api.coindesk.com/v1/bpi/historical/close.json?start=2023-08-01&end=2023-08-31&currency=sgd

// http://api.coindesk.com/v1/bpi/historical/close.json?start=2023-08-01&end=2023-08-31  Only provides historical data till 10/07/22

// https://api.coindesk.com/v1/bpi/currentprice.json

const BitcoinLoader = () => {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState("AUD");
  const [currentPrice, setCurrentPrice] = useState(null);
  useEffect(() => {
    fetchData()
      .then((priceData) => setPriceData(priceData))
      .finally(() => setLoading(false));

    currentRateData(currency).then((currentPrice) =>
      setCurrentPrice(currentPrice)
    );
  }, []);
  useEffect(() => {
    currentRateData(currency).then((currentPrice) =>
      setCurrentPrice(currentPrice)
    );
  }, [currency]);

  const handleSelect = (e, data) => {
    setCurrency(e.target.value);
  };

  return (
    <>
      <div className={style.nav}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
          alt="bitcoin icon"
        />
        Hello
      </div>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className={style.priceContainer}>
            <div className={style.form}>
              <label htmlFor="selectCurrency">Select Currency</label>
              <select
                name="selectCurrency"
                placeholder="Select your currency"
                onChange={handleSelect}
              >
                {currencies.map((item, index) => (
                  <option key={index} value={item.currency}>
                    {item.currency}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.price}>
              <Card selectedCurrency={currency} currentRate={currentPrice} />
            </div>
          </div>
          <div>
            <LineChart currentData={priceData} />
          </div>
        </>
      )}
    </>
  );
};

export default BitcoinLoader;
