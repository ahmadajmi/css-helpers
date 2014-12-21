module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {
				files: ['*.scss'],
				tasks: ['build']
			}
		},
		cssmin: {
			build: {
				src: 'helpers.css',
				dest: 'helpers.min.css'
			}
		},
		sass: {
			build: {
				files: {
					'helpers.css': 'helpers.scss'
				}
			}
		}
	});

	grunt.registerTask('default', ['build','watch']);
	grunt.registerTask('build',  ['sass', 'cssmin']);

};
