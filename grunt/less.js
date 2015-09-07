'use strict';

module.exports = {
	options: {
		ieCompat: false
	},
	test: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.css',
					'**/*.less',
					'!**/_*.less',
					'!_**/*'
				],
				dest: '<%= config.test %>/styles/',
				ext: '.css'
			}
		]
	},
	production: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/styles/',
				src: [
					'**/*.css',
					'**/*.less',
					'!**/_*.less',
					'!_**/*'
				],
				dest: '.tmp/less/styles/',
				ext: '.css'
			}
		]
	}
};
