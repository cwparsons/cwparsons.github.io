'use strict';

module.exports = {
	options: {
		data: '<%= config.src %>/data/*.yml',
		flatten: true,
		layout: '<%= config.src %>/templates/layouts/default.hbs',
		partials: '<%= config.src %>/templates/partials/**/*.hbs',
		plugins: ['assemble-contrib-permalinks', 'assemble-contrib-sitemap']
	},
	test: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/pages/',
				src: ['**/*.hbs'],
				dest: '<%= config.test %>'
			}
		]
	},
	production: {
		files: [
			{
				expand: true,
				cwd: '<%= config.src %>/pages/',
				src: ['**/*.hbs'],
				dest: '<%= config.prod %>'
			}
		]
	}
};
