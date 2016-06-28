'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//need to load the check istanbul coverage plugin
require('istanbul/lib/register-plugins');
var commandFactory = require('istanbul/lib/command');

function ensureTestCoverage(options) {

  if (!options.coverageDirectory) {
    throw new Error('options.coverageDirectory required!');
  }

  var checkCoverageCommand = commandFactory.create('check-coverage');

  var args = [
    '--statements=' + 91,
    '--branches=' + 86,
    '--functions=' + 83,
    '--lines=' + 91,
    '--root=' + (options.rootDirectory ? options.rootDirectory : '.'),
    options.coverageDirectory + '/coverage*.json'
  ];

  return function (cb) {
    //nice to have: check that the provided coverage file exists
    return checkCoverageCommand.run(args, function (err) {
      if (err) {
        cb(new $.util.PluginError('ensureTestCoverage', err, {
          showStack: false
        }));
      } else {
        cb();
      }

    });
  };
}

gulp.task('cover-karma', ensureTestCoverage({
  coverageDirectory: './coverage/*'
}));

