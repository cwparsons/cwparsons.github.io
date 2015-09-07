'use strict';

module.exports = {
	production: {
		options: {

		},
		files: [
			{
				expand: true,
				cwd: './<%= config.prod %>/',
				src: ['**/*.html'],
				dest: './<%= config.prod %>/'
			}
		]
	}
};