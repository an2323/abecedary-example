require=(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
if(!eval && execScript) {
  execScript("null");
}

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}

function AbecedaryReporter(runner) {
  var self = this;
  Mocha.reporters.Base.call(this, runner);
  var tests = [], failures = [], passes = [];

  runner.on('test end', function(test){
    tests.push(test);
  });

  runner.on('pass', function(test){
    passes.push(test);
  });

  runner.on('fail', function(test){
    failures.push(test);
  });

  runner.on('end', function(){
    var data = {
        stats: self.stats, 
        tests: tests.map(clean),
        failures: failures.map(clean),
        passes: passes.map(clean)
    };
    window.parent.stuffEmit('finished', data);
  });
}
function F(){};
F.prototype =  Mocha.reporters.Base.prototype;
AbecedaryReporter.prototype = new F;
AbecedaryReporter.prototype.constructor = AbecedaryReporter

mocha.globals(['code']);
mocha.setup({ ui: 'bdd',
              bail: true, 
              reporter: AbecedaryReporter, 
              ignoreLeaks: false
            });
},{}]