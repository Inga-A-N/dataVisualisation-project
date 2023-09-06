export const fetchData = async () => {
  const res = await fetch(
    `https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=	${
      new Date().getTime() - 2592000000
    }&end=	${new Date().getTime()}`
  );
  const data = await res.json();
  // console.log(data.data);

  return data.data;
};

export const currentRateData = async (currency) => {
  const res = await fetch(
    `https://api.coinbase.com/v2/prices/BTC-${currency}/spot`
  );
  const data = await res.json();
  const newNum = +data.data.amount;

  return newNum.toFixed(2);
};
