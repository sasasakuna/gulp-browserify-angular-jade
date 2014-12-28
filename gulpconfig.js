var src = './app/',
	dest = './dest/';

module.exports = {
	style: {
		src: src + 'css/**/*.scss',
		dest: dest + 'css/'
	},
	jade: {

		src: src + 'views/**/*.jade',
		dest: dest + 'views/'
	},
	browserify: {
		src: src + 'js/main.js',
		dest: dest + 'js/'
	}
};
