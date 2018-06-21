// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: 'Music is like a dream. One that I cannot hear.',
    source: 'Ludwig van Beethoven',
    citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/'
  },
  {
    quote: 'Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.',
    source: 'Plato',
    citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/'
  },
  {
    quote: 'One good thing about music, when it hits you, you feel no pain.',
    source: 'Bob Marley',
    citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/'
  },
  {
    quote: 'Music expresses that which cannot be said and on which it is impossible to be silent',
    source: 'Victor Hugo',
    citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/'
  },
  {
    quote: 'If I had my life to live over again, I would have made a rule to read some poetry and listen to some music at least once every week.',
    source: 'Charles Darwin',
    citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/'
  },
  {
    quote: 'Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.',
    source: 'Maya Angelou',
    citation: 'https://www.cmuse.org/100-famous-and-inspirational-music-quotes/'
  },
  {
    quote: 'Remember to look up at the stars and not down at your feet.',
    source: 'Stepehn Hawking',
    citation: 'http://time.com/5198842/stephen-hawking-quotes-universe-life/',
    year: 2010
  }
];

function getRandomQuote () {
  return quotes[(Math.floor(Math.random() * quotes.length))];
}
