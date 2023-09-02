export const fetchData = async () => {
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const data = await res.json();
  console.log(data.bpi);
  return data.bpi;
};
