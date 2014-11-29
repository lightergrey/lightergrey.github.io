'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  cp = require('child_process'),
  prefix = require('gulp-autoprefixer'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');


gulp.task('jekyll-build', function (done) {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
  return cp.spawn('jekyll', ['build','--config', '_config.yml,_config-dev.yml'], {stdio: 'inherit'})
  .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    logLevel: 'info',
    logConnections: false,
    logFileChanges: true,
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('_scss/style.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('_site/css'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('_scss/*.scss', ['sass']);
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync'], function() {
  gulp.start('watch');
});
