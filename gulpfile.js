var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");

gulp.task('minify-html', function () {
    gulp.src('./src/index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('bin'));
});


gulp.task('minify-css', function () {
    gulp.src('./src/public/css/main.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('bin'));
});

gulp.task('minify-js', function () {
      return gulp.src('./src/public/js/*.js')
      .pipe(uglify().on('error', function(e){
          console.log(e);
       }))
      .pipe(gulp.dest('bin'));
  });

gulp.task('minify', ['minify-html', 'minify-css' , 'minify-js']);

gulp.task('default', ['minify']);
