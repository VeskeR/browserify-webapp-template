'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      serve: {
        files: {
          '.tmp/scripts/main.js': ['app/scripts/main.js']
        }
      },
      dist: {
        files: {
          'dist/scripts/main.js': ['app/scripts/main.js']
        }
      }
    },
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
