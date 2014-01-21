var dom = require('dom');
var debounce = require('debounce');
var CodeMirror = require('codemirror');
var Abcedary = require('abecedary');
var extend = require('extend');
var iframeTemplate = require('./iframe_template'); 
require('codemirror-mode-javascript')(CodeMirror);

var code = require('./code');
var tests = require('./tests');
var answer = require('./answer');


var options = {
  indentUnit: 2,
  tabSize: 2,
  mode: 'javascript',
  theme: 'vibrant-ink',
  lineNumbers: true,
  lineWrapping: true,
  gutters: ["CodeMirror-foldgutter"]
}

var sandbox = new Abcedary('http://localhost:4000/iframe.html', iframeTemplate),
    editor = new CodeMirror(dom('.editor')[0], extend({ value: code,
    }, options)),
    tests = new CodeMirror(dom('.tests')[0], extend({ value: tests }, options)),
    answer = new CodeMirror(dom('.answer')[0], extend({ value: answer }, options));

var runWrapper = debounce(function () {
  sandbox.run(editor.getValue(), tests.getValue())
}, 250);

editor.on('change', runWrapper);
tests.on('change', runWrapper);

// 
sandbox.on('complete', function(results) {
  console.log('sandbox run complete: ');

  dom('#content .stats').text("Passing: " + results.stats.passes + " / failures: " + results.stats.failures + " / duration: " + results.stats.duration);

  var list = dom('.tasks')
  list.empty()

  for(var test in results.passes) {
    list.append("<li class='success'>"+results.passes[test].title+"</li>");
  }
  for(var test in results.failures) {
    list.append("<li class='failure'>"+results.failures[test].title+"</li>");
  }
});


// Control the tabs for code/tests
dom('.nav-tabs a').on('click', function (e) {
  e.preventDefault();
  dom('.active').removeClass('active')
  dom(this).parent().addClass('active')
  dom('#' + dom(this).attr('data-loc')).addClass('active');
  editor.refresh();
  tests.refresh();
  answer.refresh();
})

setTimeout(runWrapper, 1);
