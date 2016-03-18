'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      serve: {
        options: {
          browserifyOptions: {
            debug: true
          }
        },
        files: {
          '.tmp/scripts/main.js': ['app/scripts/main.js']
        }
      },
      build: {
        files: {
          'dist/scripts/main.js': ['app/scripts/main.js']
        }
      }
    },
    clean: {
      serve: {
        src: ['.tmp/']
      },
      build: {
        src: ['dist/']
      }
    },
    sass: {
      serve: {
        options: {
          sourceMap: true
        },
        files: {
          '.tmp/styles/main.css': ['app/styles/main.scss']
        }
      },
      build: {
        files: {
          'dist/styles/main.css': ['app/styles/main.scss']
        }
      }
    },
    wiredep: {
      options: {
        ignorePath: /^(\.\.\/)*\.\./
      },
      task: {
        src: ['app/**/*.html']
      }
    }
  });

  grunt.registerTask('default', []);
}
