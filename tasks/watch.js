var gulp = require('gulp');
var config = require('../gulpconfig');

module.exports = function(){
  gulp.watch(config.style.src, ['sass']);
  
  gulp.watch(config.jade.src, ['jade']);
};
