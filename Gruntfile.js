module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['app/**/*.js'],
      options: {
        ignores: [
          'app/test/**/*.js',
          'app/assets/scripts/libs/**/*.js'
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: '*',
          base: 'app'
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  //Run server
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Load jshint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //watch files
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'jshint', 'watch']);

};
