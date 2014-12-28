var gulp = require('gulp');
var path = require('path');

module.exports = function(tasks){

  tasks.forEach(function(name){
    gulp.task(name, require(path.join(__dirname, name)));
  });

  return gulp;

};
