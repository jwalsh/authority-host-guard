// create a partial fuzzer for evaluating the interface mismatch
const fetch = require('node-fetch');
// const request = require('request');
const { URL } = require('url');

// See examples from
// A New Era of SSRF - Exploiting URL Parsers in Trending Programming Languages
// Orange Tsai : DC 25

// Implementations:
// + Request
// - cURL
// - libcurl
// + Library
// - Python requests
// - Python urllib
// - Python urllib2
// - Python httplib
// - NodeJS URL
// - Perl URI
// - Go net/url
// - PHP parse_url Ruby addressable

// build the list of test URLs by inserting bare reserved characters into the various components
// See https://github.com/w3c/web-platform-tests/tree/master/url
const urls = [
  'http://a:b@c.com:80#d',
  'http://foo@evil.com:80@google.com/',
  'http://google.com#@evil.com/',
  'http://foo@127.0.0.1 @google.com/',
  // 'http://1.1.1.1 &/@2.2.2.2# @3.3.3.3/',
  'http://1.1.1.1 &@2.2.2.2# @3.3.3.3/',
  // 'http://127.0.0.1:11211:80/',
  'http://127.0.0.1/sandbox/\xFF\x2E\xFF\x2E/passwd',
  'http://127.0.0.1/sandbox/ＮＮ/passwd'
];

// http://www.fileformat.info/info/unicode/char/ff2e/index.htm
// c-x 8 RET ff2e RET
let NN = 'Ｎ';
let umbrella = '☔';
let warning = '☣';
let recycled = '♲';

// Consider standard tests that are run to guard internal hosts or environment files

urls.map((e, i) => {
  let url = new URL(e);
  let host = url.host;
  console.log(host, ' -> ' , e);
  // block blacklisted domains
  let blacklist = ['evil.com'];

  // block file traversal up
  let path = '';
  if (path.indexOf('..') !== -1) {
    console.log('Warning: Parent traversal');
  }

});


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

let alpha = lowalpha | upalpha; // /[a-z/i

// request.post(
//   'http://www.yoursite.com/formpage',
//   { json: { key: 'value' } },
//   function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(body);
//     }
//   }
// );
