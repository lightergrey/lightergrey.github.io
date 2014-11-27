'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  cp = require('child_process'),
  reload = browserSync.reload,
  prefix = require('gulp-autoprefixer'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');

// ============================================================================
// Tasks
// ============================================================================

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('jekyll-serve', function (done) {
  return cp.spawn('jekyll', ['serve', '--config','_config.yml,_config-dev.yml'], {stdio: 'inherit'})
  .on('close', done);
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
  gulp.watch('_scss/*.scss', ['sass', reload]);
  gulp.watch('_site/**/*.html', reload);
});

gulp.task('default', ['sass', 'jekyll-serve', 'watch', 'browser-sync']);
