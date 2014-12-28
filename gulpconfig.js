var src = './app/',
	dest = './dest/';

module.exports = {
	style: {
		src: src + 'stylesheets/**/*.scss',
		dest: dest + 'css/'
	},
	jade: {
		src: src + 'jade/**/*.jade',
		dest: dest + 'views/'
	},
	browserify: {
		src: src + 'js/main.js',
		dest: dest + 'js/'
	}
};
