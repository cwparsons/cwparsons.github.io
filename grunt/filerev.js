'use strict';

module.exports = {
	options: {
		encoding: 'utf8',
		algorithm: 'md5',
		length: 8
	},
	production: {
		src: '<%= config.prod %>/**/*.{jpg,jpeg,gif,png,webp,eot,ttf,woff,svg,js,css}'
	}
};
