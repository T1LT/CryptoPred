export const coinkeys = ["BTC", "ETH", "LTC", "DOGE", "XLM", "USDT", "XRP"];
export const coinnames = [
  "Bitcoin",
  "Ethereum",
  "Litecoin",
  "Dogecoin",
  "Stellar",
  "Tether",
  "XRP",
];

const getTime = timeFromApi => timeFromApi*1000;
export const parseResponse = (response) =>
  response["Data"].reduce(
    (acc, curr) => [...acc, { [getTime(curr.time)]: curr.close }],
    []
  );
