export const fetchData = async () => {
  const res = await fetch(
    // `http://api.coindesk.com/v1/bpi/historical/close.json?start=2021-08-01&end=2021-08-31`
    "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=	1690812000000&end=	1693490400000"
  );
  const data = await res.json();
  console.log(data.data);

  return data.data;
};

export const currentRateData = async (currency) => {
  const res = await fetch(
    `https://api.coinbase.com/v2/prices/BTC-${currency}/spot`
  );
  const data = await res.json();
  const newNum = +data.data.amount;
  console.log(data);

  return newNum.toFixed(2);
};
