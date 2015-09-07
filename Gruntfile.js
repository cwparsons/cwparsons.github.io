'use strict';

module.exports = function (grunt) {
	// Load all grunt tasks
	grunt.loadNpmTasks('assemble');
	require('load-grunt-tasks')(grunt);
	require('load-grunt-config')(grunt, {
		jitGrunt: true
	});

	grunt.registerTask('serve', [
		'build',
		'connect:test',
		'watch'
	]);

	grunt.registerTask('serve-production', [
		'build-production',
		'connect:production'
	]);

	grunt.registerTask('build', [
		'clean:test',
		'less:test',
		'autoprefixer:test',
		'copy:test',
		'assemble:test'
	]);

	grunt.registerTask('useminTasks', [
		'useminPrepare',
		'concat:generated',
		'cssmin:generated',
		'filerev',
		'usemin',
		'htmlmin:production'
	]);

	grunt.registerTask('build-production', [
		'clean:production',
		'assemble:production',
		'less:production',
		'autoprefixer:production',
		'copy:production',
		'useminTasks',
		'staticinline',
		'htmlmin:production'
	]);

	grunt.registerTask('deploy', [
		'build-production',
		'gh-pages',
		'open:staging',
		'clean:production'
	]);


	grunt.registerTask('default', [
		'build'
	]);
};
