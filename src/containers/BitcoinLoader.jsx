import { useState, useEffect } from "react";
import style from "./BitcoinLoader.module.scss";
import currencies from "../supportedCurrencies.json";
import Card from "../components/Card/Card";
import { fetchData } from "../services/bitcoin-service";

import LineChart from "../components/Chart/LineChart";

// http://api.coindesk.com/v1/bpi/historical/close.json?start=2023-08-01&end=2023-08-31&currency=sgd

// http://api.coindesk.com/v1/bpi/historical/close.json?start=2023-08-01&end=2023-08-31  Only provides historical data till 10/07/22

// https://api.coindesk.com/v1/bpi/currentprice.json

const BitcoinLoader = () => {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState("AUD");
  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch(
    //     "http://api.coindesk.com/v1/bpi/historical/close.json?start=2021-08-01&end=2021-08-31"
    //   );
    //   const data = await res.json();
    //   setPriceData(data.bpi);
    //   console.log(data.bpi);
    //   console.log(priceData);
    //   // console.log(data.bpi.USD.rate);

    //   console.log(data);

    //   setLoading(false);
    // }
    fetchData()
      .then((priceData) => setPriceData(priceData))
      .finally(() => setLoading(false));
  }, []);
  console.log(priceData);
  console.log(loading);

  const handleSelect = (e, data) => {
    setCurrency(e.target.value);

    //console.log(e.target.value);
  };

  return (
    <>
      <div className={style.nav}>Hello</div>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className={style.priceContainer}>
            <div className={style.form}>
              <select
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
              <Card selectedCurrency={currency} />
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
