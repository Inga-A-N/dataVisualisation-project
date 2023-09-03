export const fetchData = async () => {
  const res = await fetch(
    `http://api.coindesk.com/v1/bpi/historical/close.json?start=2021-08-01&end=2021-08-31`
  );
  const data = await res.json();
  console.log(data.bpi);
  console.log(await data.bpi);
  return data.bpi;
};

export const currentRateData = async () => {
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const data = await res.json();
  console.log(data.bpi);
  return data.bpi;
};
