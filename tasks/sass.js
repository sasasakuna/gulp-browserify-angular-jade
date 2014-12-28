var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var config = require('../gulpconfig');

module.exports = function(){
  return gulp.src([config.style.src])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(config.style.dest));
};
