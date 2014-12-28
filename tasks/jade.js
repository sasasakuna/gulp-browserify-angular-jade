var gulp = require('gulp');
var config = require('../gulpconfig.js');
var jade = require('gulp-jade');

module.exports = function(){
  return gulp.src(config.jade.src)
  .pipe(jade())
  .pipe(gulp.dest(config.jade.dest));
};
