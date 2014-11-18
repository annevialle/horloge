module.exports = function(grunt) {

  // Configuration de Grunt
  grunt.initConfig({

  	jshint: {
  		all: ['js/*.js']
  	},

  	uglify: {
  		dist: {
  			files: {
  				'js/min.js' : ['js/datas.js', 'js/main.js']
  			}
  		}
  	}

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Définition des tâches Grunt
  grunt.registerTask('default', ['jshint', 'uglify']);

}