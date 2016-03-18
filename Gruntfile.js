'use strict';
module.exports = function (grunt) {
  var packageConfig = grunt.file.readJSON('package.json');
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      options: {
        interrupt: true
      },
      bower: {
        files: ['bower_components'],
        tasks: [

        ]
      },
      js: {
        files: ['app/**/*.js'],
        tasks: [

        ]
      },
      sass: {
        files: ['app/**/*.scss'],
        tasks: [

        ]
      },
      serve: {
        options: {
          livereload: 9000,
          interrupt: false
        },
        files: [
          '.tmp/**/*.{js,css,html,jpg,png,svg,gif,json}',
          'app/**/*.html'
        ]
      },
      dist: {
        options: {
          livereload: 9000,
          interrupt: false
        },
        files: [
          'dist/**/*.{js,css,html,jpg,png,svg,gif,json}',
          'app/**/*.html'
        ]
      }
    }
  });

  grunt.registerTask('default', []);
}
