import { useState, useCallback } from 'react';
import quotes from '../data/quotes';
import { backgroundPalette } from '../constants/theme';

function pickRandomIndex(length, excludeIndex = -1) {
  if (length === 1) return 0;
  let index;
  do {
    index = Math.floor(Math.random() * length);
  } while (index === excludeIndex);
  return index;
}

export default function useRandomQuote() {
  const [quoteIndex, setQuoteIndex] = useState(() =>
    pickRandomIndex(quotes.length)
  );
  const [colorIndex, setColorIndex] = useState(() =>
    pickRandomIndex(backgroundPalette.length)
  );

  const nextQuote = useCallback(() => {
    setQuoteIndex((prev) => pickRandomIndex(quotes.length, prev));
    setColorIndex((prev) => pickRandomIndex(backgroundPalette.length, prev));
  }, []);

  return {
    quote: quotes[quoteIndex],
    theme: backgroundPalette[colorIndex],
    nextQuote,
  };
}
