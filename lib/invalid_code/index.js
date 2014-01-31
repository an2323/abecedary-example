var iframeTemplate = require('./iframe'); 
var code = require('./code');
var tests = require('./tests');
var answer = require('./answer');

module.exports = {
  name: "Sample JavaScript Challenge with invalid Code",
  iframe: iframeTemplate,
  code: code,
  tests: tests,
  answer: answer,
  syntax: 'javascript',
  question: "This code is invalid, and we're giving a custom error message.",
  options: {
    bail: true
  }
}