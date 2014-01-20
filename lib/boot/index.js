var dom = require('dom');
var debounce = require('debounce');
var CodeMirror = require('codemirror');
var Abcedary = require('abecedary');
var iframeTemplate = require('./iframe_template'); 
require('codemirror-mode-javascript')(CodeMirror);

var code = require('./code');
var tests = require('./tests');

var sandbox = new Abcedary('http://localhost:4000/iframe.html', iframeTemplate),
    editor = new CodeMirror(dom('.editor')[0], { 
      value: code, 
      mode: 'javascript',
      theme: 'vibrant-ink',
      lineNumbers: true,
      lineWrapping: true,
      gutters: ["CodeMirror-foldgutter"]
    }),
    tests = new CodeMirror(dom('.tests')[0], {
      value: tests,
      mode: 'javascript',
      theme: 'vibrant-ink',
      lineNumbers: true,
      lineWrapping: true,
      gutters: ["CodeMirror-foldgutter"]
    });

var runWrapper = debounce(function () {
  sandbox.run(editor.getValue(), tests.getValue())
}, 250);

editor.on('change', runWrapper);
tests.on('change', runWrapper);

sandbox.on('complete', function(results) {
  console.log('sandbox run complete: ');

  dom('.console p').text("Passing: " + results.stats.passes + " / failures: " + results.stats.failures + " / duration: " + results.stats.duration);

  var list = dom('.console ul')
  list.empty()

  for(var test in results.passes) {
    list.append("<li class='success'>"+results.passes[test].title+"</li>");
  }
  for(var test in results.failures) {
    list.append("<li class='failure'>"+results.failures[test].title+"</li>");
  }

})