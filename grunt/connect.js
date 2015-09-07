'use strict';

module.exports = {
	options: {
		open: true
	},
	test: {
		options: {
			base: '<%= config.test %>',
			hostname: 'localhost',
			livereload: true,
			port: 9000
		}
	},
	production: {
		options: {
			base: '<%= config.prod %>',
			keepalive: true
		}
	}
};