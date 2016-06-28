'use strict';

var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('config-watch', function () {
  gulp.watch([
    'app-config.json'
  ], ['config']);
});

gulp.task('config', function () {
  return gulp.src('app-config.json')
    .pipe(gulpNgConfig('recipic.config', {
      environment: gulp.environment
    }))
    .pipe(gulp.dest('www/config'));
});

