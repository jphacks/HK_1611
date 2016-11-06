var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify')

gulp.task('index', function() {
  var b = browserify(
    {entries: './public/scripts/index.js'})

  return b.transform("babelify",
      {presets: ["react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('select', function() {
  var b = browserify(
    {entries: './public/scripts/select.js'})

  return b.transform("babelify",
      {presets: ["react"]})
    .bundle()
    .pipe(source('appsel.js'))
    .pipe(gulp.dest('./public/'));
});
