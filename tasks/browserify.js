var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var config = require('../gulpconfig.js');

module.exports = function(){
    return browserify(config.browserify.src)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.browserify.dest));
};
