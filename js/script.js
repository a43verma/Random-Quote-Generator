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

// selects a random quote from the quotes array
function getRandomQuote ( ) {
  randomQuote = quotes[(Math.floor(Math.random() * quotes.length))];
}

// builds the final output based on the chosen quote
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

// prints a message to the 'quote-box' div
function printMessage () {
  document.getElementById('quote-box').innerHTML = message;
}

// returns a number between 0 - 300 to be used as an RGB value
function rGBNumber () {
  return Math.floor(Math.random() * 100);
}

// changes the color of the background of the body and the button
function colorChange (){
  var newColor = "rgb(" + rGBNumber() + "," + rGBNumber() + "," + rGBNumber() + ")";
  var x = document.getElementsByTagName('BODY');
  x[0].style.backgroundColor = newColor;
  document.getElementById('loadQuote').style.backgroundColor = newColor;
  }

/*
Combines all the previous functions by first erasing the current message
variable. Then gets a random quote, builds the message over again, and
finally changes the color. Activated when the 'Show another quote' button
is pressed.
 */

function printQuote () {
  message = ""
  getRandomQuote();
  buildMessage();
  printMessage();
  colorChange();
}

// Automatically calls the printQuote function after an interval of time
setInterval(function(){printQuote()}, 10000);
