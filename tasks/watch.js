var gulp = require('gulp');
var config = require('../gulpconfig');

module.exports = function(){
  gulp.watch(config.style.src, ['sass']);
  gulp.watch(config.browserify.src, ['browserify']);
  gulp.watch(config.jade.src, ['jade']);
};
