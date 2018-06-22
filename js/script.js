// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// An array of objects that contain quotes
var quotes = [
  {
    quote: 'Music is like a dream. One that I cannot hear.',
    source: 'Ludwig van Beethoven',
    citation: 'CMUSE',
    type: 'Music'
  },
  {
    quote: 'Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.',
    source: 'Plato',
    citation: 'CMUSE',
    type: 'Music'
  },
  {
    quote: 'One good thing about music, when it hits you, you feel no pain.',
    source: 'Bob Marley',
    citation: 'CMUSE',
    type: 'Music'
  },
  {
    quote: 'Music expresses that which cannot be said and on which it is impossible to be silent',
    source: 'Victor Hugo',
    citation: 'CMUSE',
    type: 'Music'
  },
  {
    quote: 'If I had my life to live over again, I would have made a rule to read some poetry and listen to some music at least once every week.',
    source: 'Charles Darwin',
    citation: 'CMUSE',
    type: 'Music'
  },
  {
    quote: 'Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.',
    source: 'Maya Angelou',
    citation: 'CMUSE',
    type: 'Music'
  },
  {
    quote: 'Remember to look up at the stars and not down at your feet.',
    source: 'Stepehn Hawking',
    citation: 'Time',
    year: 2010,
    type: 'Inspirational'
  },
  {
    quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
    source: 'John Keats',
    citation: 'Brainy Quote',
    year: 1819,
    type: "Love"
  }
];

// used to hold and build the final output string
var message = "";

// used to hold the object pulled from the quotes array
var randomQuote = {};

// returns a number between 0 - 300 to be used as an RGB value
function rGBNumber () {
  return Math.floor(Math.random() * 300);
}

// used the rGBNumber function to produce a string that can be used as a CSS property
var newColor = "rgb(" + rGBNumber() + "," + rGBNumber() + "," + rGBNumber() + ")";


function colorChange (){
  var x = document.getElementsByTagName('BODY');
  x[0].style.backgroundColor = newColor;
  console.log(x);
  }

function getRandomQuote ( ) {
  randomQuote = quotes[(Math.floor(Math.random() * quotes.length))];
}

function buildMessage ( ) {
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  if ("citation" in randomQuote) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if ("year" in randomQuote) {
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  if ("type" in randomQuote) {
    message += '<span class="type"> (' + randomQuote.type + ')</span>';
  }
  message += '</p>'
}

function printMessage () {
  document.getElementById('quote-box').innerHTML = message;
}



function printQuote () {
  message = ""
  printMessage();
  getRandomQuote();
  buildMessage();
  printMessage();
  colorChange();
}


// body {
//   /*text-align: center;*/
//   background-color: #36b55c;
