'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var appConfig = require('../app-config.json');

gulp.task('inject', ['inject-css'], function () {

  var injectStyles = gulp.src([
    paths.tmp + '/serve/**/*.css',
    '!' + paths.tmp + '/serve/module/vendor.css',
    '!' + paths.tmp + '/serve/app/vendor.css'
  ], {
    read: false
  });

  var injectScripts = gulp.src([
    paths.tmp + '/**/*.js',
    paths.src + '/**/*.js',
    '!' + paths.src + '/**/*.test.js'
  ]).pipe($.angularFilesort().on('error', $.util.log));

  var injectOptions = {
    ignorePath: [paths.src, paths.tmp + '/serve', paths.tmp + '/partials'],
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'bower_components'
  };

  return gulp.src(paths.src + '/*.html')
    .pipe(replace('%HTML5:DEFAULT:BASE:HREF%', appConfig[gulp.environment].DEFAULT_HTML5_BASE_TAG))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.tmp + '/serve'));
});

gulp.task('inject-css', ['styles'], function () {
  var sources = gulp.src(['./tmp/**/*.css'], {
    read: false
  });
  return gulp.src('./.tmp/serve/index.html')
    .pipe($.inject(sources, {
      ignorePath: 'src',
      addRootSlash: false
    }))
    .pipe($.file('app/vendor.css', '/* */'))
    .pipe(gulp.dest('./.tmp/serve'));
});

