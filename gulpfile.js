var gulp = require('gulp');

var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jade = require('gulp-jade');

gulp.task('lint', function(){
	gulp.src(['./app/**/*.js','!./app/bower_components/**'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});

gulp.task('minify-js', function(){
	gulp.src('./app/**/*.js')
	.pipe(uglify({

	}))
	.pipe(gulp.dest('./dist/'))
});


gulp.task('copy-html-files', function(){
	gulp.src('./app/**/*.html')
	.pipe(gulp.dest('dist/'));
});

gulp.task('connect', function(){
	connect.server({
		root: 'app/',
		port:8888
	});
});

gulp.task('connectDist', function(){
	connect.server({
		root: 'dist/',
		port: 9999
	});
});


gulp.task('jade', function(){
	gulp.src('./app/jade/**/*.jade')
		.pipe(jade())
		.pipe('dist/views/');
})

gulp.task('default', ['lint', 'connect']);
