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
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 9000
      },
      serve: {
        options: {
          open: 'http://localhost:9000/app/index.html',
          base: [
            '.'
          ]
        }
      },
      dist: {
        options: {
          open: 'localhost:9000/dist/',
          base: 'dist'
        }
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
      dist: {
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
