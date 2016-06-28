'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.src + '/**/*.html',
    paths.sass,
    paths.src + '/**/*.js',
    'bower.json'
  ], ['inject', 'partials']);
});

