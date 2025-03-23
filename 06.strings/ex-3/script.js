const quote = 'I dO nOT lIke gREen eGgS anD HAM';
const firstLetter = quote.charAt(0).toUpperCase();
const substring = quote.slice(1).toLowerCase();
const fixedQuote = firstLetter.concat(substring);
const newQuote = fixedQuote.replace("green eggs and ham", "papaya");
const finalQuote = newQuote + ".";