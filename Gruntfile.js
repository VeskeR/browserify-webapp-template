'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        }
      },
      serve: {
        files: {
          '.tmp/scripts/main.js': ['app/scripts/main.js']
        }
      },
      build: {
        options: {
          browserifyOptions: {
            debug: false
          }
        },
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
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      serve: {
        files: [{
          expand: true,
          cwd: '.tmp',
          src: 'styles/**/*.css',
          dest: '.tmp'
        }]
      },
      dist: {
        options: {
          map: false
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: 'styles/**/*.css',
          dest: 'dist'
        }]
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
      build: {
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
