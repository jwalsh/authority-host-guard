// create a partial fuzzer for evaluating the interface mismatch
var fetch = require('node-fetch');
var request request('request');

request.post(
  'http://www.yoursite.com/formpage',
  { json: { key: 'value' } },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }
);

// build the list of test URLs by inserting bare reserved characters into the various components
const urls = [
  'http://a:b@c.com#d',
  'http://a@b:d.com#:b@c.com#d',
  'http://a@c.com#:d@e.com/f/g#h',
];

let schemes = [
  'http',
  'https',
  'ftp',
  'mailto',
  'news',
  'telnet'
];

var user = [
  'user'
];




let  lowalpha = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" |
    "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" |
    "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

let upalpha  = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" |
    "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" |
    "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";

let alpha    = lowalpha | upalpha;

// spaces, newlines and tabs
// unicode

urls.map((e, i) => {
  console.log(e);
});
