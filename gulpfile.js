'use strict';

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  notify = require('gulp-notify'),
  del = require('del'),
  gutil = require('gulp-util'),
  minifyCss = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  rev = require('gulp-rev'),
  sass = require('gulp-sass');


gulp.task('serve', ['styles'], function() {
  browserSync.init({
    logLevel: 'info',
    logConnections: false,
    logFileChanges: true,
    server: '_site'
  });

  gulp.watch('_scss/*.scss', ['styles']);
  gulp.watch('_site/*').on('change', browserSync.reload);
});


gulp.task('jekyll', ['styles'], function() {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('bundle', ['exec', 'jekyll', 'serve', '--config', '_config.yml,_config-dev.yml'], {
    stdio: 'inherit'
  });
});


gulp.task('styles', function () {

  del(['_site/css/*','css/*']);

  return gulp.src('_scss/style.scss')
    .pipe(sass())
    .on('error', notify.onError())
    .pipe(autoprefixer('last 1 version', 'ie 9', 'ie 10', 'ios 6'))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(rev())
    .pipe(gulp.dest('_site/css/'))
    .pipe(gulp.dest('css/'))
    .pipe(rev.manifest('_data/rev-manifest.json', {
      base: '_data',
      merge: true
    }))
    .pipe(gulp.dest('_data'))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve', 'jekyll']);
