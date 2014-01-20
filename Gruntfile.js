// This will generate dist/sandbox_dependencies.js with:
//   browserified version of sinon, chai and esprima-jquery-map
//   mocha testing library
//   mocha custom test runner

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      client: {
        src: 'lib/sandbox/blank.js',
        dest: 'build/sandbox_vendor.js',
        options: {
          external: ['sinon', 'chai', 'esprima-jquery-map']
        }
      }
    },
    concat: {
      'dist/sandbox-dependencies.js': ['build/sandbox_vendor.js', 'node_modules/mocha/mocha.js', 'lib/sandbox/runner.js']
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // The default tasks to run when you type: grunt
  //grunt.registerTask('default', ['browserify', 'concat']);
  grunt.registerTask('default', ['concat']);
};