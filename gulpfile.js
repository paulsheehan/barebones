var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del'),
    wait = require('gulp-wait');


gulp.task('compileSass', function() {
  return gulp.src('public/stylesheets/scss/style.scss')
  	.pipe(wait(500))
  	.pipe(maps.init()) //Process the original sources
	.pipe(sass())
	.pipe(maps.write('./')) // Add the map to modified source
    .pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task('watch', function() {
    gulp.watch('public/stylesheets/scss/**/*.scss',['compileSass']);
});

//default task
gulp.task('default', ['watch']);