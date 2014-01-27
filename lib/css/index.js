var iframeTemplate = require('./iframe'); 
var code = require('./code');
var tests = require('./tests');
var answer = require('./answer');

module.exports = {
  iframe: iframeTemplate,
  code: code,
  tests: tests,
  answer: answer,
  syntax: 'css',
  name: "Sample CSS Question",
  question: "Set the background color to red on the body."
  options: {}
}