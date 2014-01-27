var iframeTemplate = require('./iframe'); 
var code = require('./code');
var tests = require('./tests');
var answer = require('./answer');

module.exports = {
  iframe: iframeTemplate,
  code: code,
  tests: tests,
  answer: answer,
  syntax: 'html',
  name: "Mixed Mode Question",
  question: "Create a script tag, and in it create a function named `add` which takes in two numbers and returns the result.",
  options: {
    bail: true
  }
}