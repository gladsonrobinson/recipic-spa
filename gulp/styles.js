'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

gulp.task('styles', function (done) {
  gulp.src([
      './scss/app.scss'
    ])
    .pipe($.sass())
    .pipe(gulp.dest(paths.tmp + '/serve/'))
    .on('end', done);
});

