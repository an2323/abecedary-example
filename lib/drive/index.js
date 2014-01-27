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
  name: "Sample Drive Question",
  question: "This is a sample question using an external library, Google Drive.",
  options: {
    bail: true
  }
}