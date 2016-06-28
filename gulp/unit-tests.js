'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep');
var paths = gulp.paths;

function runTests(singleRun) {

  var bowerDeps = wiredep({
    directory: 'bower_components',
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    paths.src + '/**/*.js',
    paths.tmp + '/**/*.js',
    paths.src + '/**/*.html'
  ]);

  return function () {
    return gulp.src(testFiles)
      .pipe($.karma({
        configFile: '',
        preprocessors: {
          'www/**/*.html': 'ng-html2js',
          'www/**/!(*.test).js': 'coverage'
        },
        ngHtml2JsPreprocessor: {
          stripPrefix: 'www/'
        },
        frameworks: ['mocha', 'chai', 'sinon'],
        reporters: ['progress', 'coverage'],
        browsers: ['PhantomJS'],
        coverageReporter: {
          reporters: [{
            type: 'json'
          }, {
            type: 'html'
          }, {
            type: 'text-summary'
          }],
          dir: 'coverage'
        },
        action: singleRun ? 'run' : 'watch'
      }))
      .on('error', function (err) {
        // single run / ci run : fail and exit if tests fail
        // dev mode watchers : continue watching don't exit
        if (singleRun) {
          throw err;
        }
      });
  };

}

gulp.task('ci-test-sequence', $.sequence('test', 'cover-karma'));

gulp.task('test', $.sequence(
  'setenv-dev',
  'config',
  'partials',
  'inject',
  'lint:build',
  'scss-lint',
  'beautify:build',
  'tests-runonce'
));

gulp.task('tests-runonce', runTests(true));

/**
 * Continuous Test Watcher
 * To be used in Development
 * Note that it relies on gulp serve to be running
 */
gulp.task('test:auto', runTests(false));

