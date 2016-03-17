'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      serve: {
        src: ['.tmp/']
      },
      dist: {
        src: ['dist/']
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      serve: {
        files: {
          '.tmp/styles/main.css': ['app/styles/main.scss']
        }
      },
      dist: {
        options: {
          sourceMap: false
        },
        files: {
          'dist/styles/main.css': ['app/styles/main.scss']
        }
      }
    }
  });

  grunt.registerTask('default', []);
}
