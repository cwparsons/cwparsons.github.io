'use strict';

module.exports = {
	test: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.test %>',
			src: [
				'**/*.html',
				'*.{config,ico,md,png,txt,xml}',
				'images/**/*',
				'fonts/**/*.*',
				'scripts/**/*.*'
			]
		}]
	},
	production: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= config.src %>',
				dest: '<%= config.prod %>',
				src: [
					'CNAME',
					'*.{config,ico,md,png,txt,xml}',
					'images/**/*',
					'fonts/**/*.*',
					'scripts/**/*.*'
				]
			},
			{
				expand: true,
				dot: true,
				cwd: '.tmp/less',
				dest: '<%= config.prod %>',
				src: [
					'styles/**.*'
				]
			}
		]
	},
	js: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.test %>',
			src: [
				'scripts/**/*.*'
			]
		}]
	},
	html: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.src %>',
			dest: '<%= config.test %>',
			src: [
				'**/*.html'
			]
		}]
	}
};
