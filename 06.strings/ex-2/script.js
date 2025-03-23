const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index) + substring;