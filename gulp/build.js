'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
  return gulp.src([
      '!' + paths.src + '/index.html',
      '!' + paths.tmp + '/serve/index.html',
      '!' + paths.mockData,
      paths.src + '/**/*.html',
      paths.tmp + '/**/*.html'
    ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'recipic'
    }))
    .pipe(gulp.dest(paths.tmp + '/partials/'));
});

gulp.task('html', ['clean', 'inject', 'partials'], function () {

  var partialsInjectFile =
    gulp.src(paths.tmp + '/partials/templateCacheHtml.js', {
      read: false
    });

  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: paths.tmp + '/partials',
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src(paths.tmp + '/serve/*.html')
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({
      preserveComments: $.uglifySaveLicense
    }))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.minifyCss())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(paths.dist + '/'))
    .pipe($.size({
      title: paths.dist + '/',
      showFiles: true
    }));
});

gulp.task('images', ['clean'], function () {
  return gulp.src(paths.src + '/assets/images/**/*')
    .pipe(gulp.dest(paths.dist + '/assets/images/'));
});

gulp.task('fonts', ['clean'], function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.addSrc(paths.src + '/fonts/**/*'))
    .pipe($.flatten())
    .pipe(gulp.dest(paths.dist + '/fonts/'));
});

gulp.task('misc', ['clean'], function () {
  return gulp.src([paths.src + '/**/*.ico', paths.src + '/**/*.json'])
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('mock-data', ['clean'], function () {
  return gulp.src(paths.mockData)
    .pipe(gulp.dest(paths.dist + '/scripts/mock-data/cms/'));
});

gulp.task('clean', function (done) {
  $.del([
    paths.dist + '/', paths.tmp + '/**/*.html',
    '!' + paths.tmp + '**/vendor.css',
    paths.tmp + '**/*.js',
    paths.tmp + '**/*.css'
  ], done);
});

