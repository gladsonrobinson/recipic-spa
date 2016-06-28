'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var util = require('util');
var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if (baseDir === paths.src ||
    util.isArray(baseDir) && baseDir.indexOf(paths.src) !== -1) {
    routes = {
      '/bower_components': 'bower_components',
      '/scripts/mock-data': 'mock-data'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes,
      middleware: [historyApiFallback()]
    },
    browser: browser
  });
}


gulp.task('serve', ['setenv-dev', 'config', 'watch', 'config-watch'], function () {
  browserSyncInit([
    paths.tmp + '/serve',
    paths.tmp + '/partials',
    paths.src
  ], [
    paths.tmp + '/serve/**/*.css',
    paths.tmp + '/partials/**/*.js',
    paths.src + '/**/*.js',
    paths.src + '/**/*.json',
    paths.tmp + '/serve/*.html',
    paths.tmp + '/serve/**/*.js',
    paths.tmp + '/serve/**/*.html',
    paths.src + '/**/*.html'
  ]);
});

