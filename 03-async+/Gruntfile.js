/*global module*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    nggettext_extract: {
      pot: {
        files: {
          'po/template.pot': ['*.html']
        }
      }
    },
    nggettext_compile: {
      all: {
        options: {
          outputFormat: 'json'
        },
        files: [
          {
            expand: true,
            src: 'po/*.po',
            dest: 'i18n/',
            ext: '.json',
            filter: 'isFile',
            flatten: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.loadNpmTasks('grunt-po2json');

  // Default task(s).
  grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);
};