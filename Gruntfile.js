module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style:'compressed'
        },
        files: {
          'files/css/btn-a11y.min.css':'files/sass/btn-a11y.scss'
        }
      }
    },
    watch: {
		livereload: {
			options: { livereload: true },
			files: ['**/*.html','**/*.css']
		},
		sass: {
			files: ['**/*.scss'],
			tasks: ['sass']
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['sass','watch']);

};