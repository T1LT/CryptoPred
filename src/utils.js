export const coinkeys = ["BTC", "ETH", "LTC", "DOGE", "XLM", "USDT", "XRP"];
export const coinnames = [
  "Bitcoin",
  "Ethereum",
  "Litecoin",
  "Dogecoin",
  "Stellar",
  "Tether",
  "Ripple",
];
export const coinrelations = {
  Bitcoin: "BTC",
  Ethereum: "ETH",
  Litecoin: "LTC",
  Dogecoin: "DOGE",
  Stellar: "XLM",
  Tether: "USDT",
  Ripple: "XRP",
};
// export const currencysymbols = {
//   USD: "$",
//   EUR: "€",
//   INR: "₹",
//   AUD: "A$",
//   CNY: "¥",
// };
export const wikilinks = {
  Bitcoin: "https://en.wikipedia.org/wiki/Bitcoin",
  Ethereum: "https://en.wikipedia.org/wiki/Ethereum",
  Litecoin: "https://en.wikipedia.org/wiki/Litecoin",
  Dogecoin: "https://en.wikipedia.org/wiki/Dogecoin",
  Stellar: "https://en.wikipedia.org/wiki/Stellar_(payment_network)",
  Tether: "https://en.wikipedia.org/wiki/Tether_(cryptocurrency)",
  Ripple: "https://en.wikipedia.org/wiki/Ripple_(payment_protocol)#XRP",
};
const getTime = (timeFromApi) => {
  let date = new Date(timeFromApi * 1000);
  return date.getMonth() + 1 + "/" + (date.getYear() - 100);
};
export const parseData = (response) =>
  response["Data"].reduce((acc, curr) => [...acc, curr.close], []);
export const parseTime = (response) =>
  response["Data"].reduce((acc, curr) => [...acc, getTime(curr.time)], []);
