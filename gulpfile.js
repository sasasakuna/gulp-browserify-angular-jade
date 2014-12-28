var gulp = require('gulp');

require('./tasks')([
		'browserify',
		'jade',
		'sass',
		'server',
		'watch'
]);

gulp.task('default',['watch', 'jade', 'browserify','sass','server']);
