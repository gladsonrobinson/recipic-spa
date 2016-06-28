'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

/**
 * SCSS Linting
 */
gulp.task('scss-lint', function () {
  return gulp.src(paths.sass)
    .pipe($.scssLint({
      config: 'scss-lint.yml'
    }))
    .pipe($.scssLint.failReporter());
});

/**
 * JavaScript Linting
 */
gulp.task('lint', function () {
  return gulp.src(paths.js)
    .pipe($.eslint())
    .pipe($.eslint.format());
});

/**
 * JavaScript Build Lint Task
 */
gulp.task('lint:build', function () {
  return gulp.src(paths.js)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

