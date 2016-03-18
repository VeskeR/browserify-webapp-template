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
          livereload: false,
          keepalive: true,
          open: 'localhost:9000/dist/',
          base: [
            'dist'
          ]
        }
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
    watch: {
      options: {
        interrupt: true
      },
      bower: {
        files: ['bower_components'],
        tasks: [
          'wiredep'
        ]
      },
      js: {
        files: ['app/**/*.js'],
        tasks: [
          'browserify:serve'
        ]
      },
      sass: {
        files: ['app/**/*.{scss,sass}'],
        tasks: [
          'sass:serve',
          'postcss:serve'
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
      }
    },
    wiredep: {
      options: {
        ignorePath: /^(\.\.\/)*\.\./
      },
      task: {
        src: ['app/**/*.html']
      }
    },
  });

  grunt.registerTask('default', []);
}
