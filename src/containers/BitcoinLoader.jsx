import { useState, useEffect } from "react";
import style from "./BitcoinLoader.module.scss";
import currencies from "../supportedCurrencies.json";
import Card from "../components/Card/Card";

const BitcoinLoader = () => {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState("AUD");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await res.json();
      setPriceData(data.bpi);
      console.log(data.bpi);
      console.log(data.bpi.USD.rate);

      console.log(data);

      setLoading(false);
    }
    fetchData();
  }, []);

  const handleSelect = (e, data) => {
    setCurrency(data.value);
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
                {currencies.map((currency, index) => (
                  <option key={index} value={currencies[index].currency}>
                    {currency.currency}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.price}>
              <Card currency={currency} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BitcoinLoader;
