import getQuotes from "./getQuotes";

const prevQuoteObj = {
  prev: 1,
  setPrev(prev: number) {
    this.prev = prev;
  },
};

export default async function getRandomQuote() {
  const results = await getQuotes();

  let randomIndex = prevQuoteObj.prev;

  while (randomIndex === prevQuoteObj.prev)
    randomIndex = Math.floor(Math.random() * results.length);

  prevQuoteObj.setPrev(randomIndex);

  return results[randomIndex];
}
