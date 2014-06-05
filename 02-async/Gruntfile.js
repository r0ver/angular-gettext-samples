/*global module*/
module.exports = function(grunt) {

grunt.initConfig({
  nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['*.html']
      }
    },
  },
  nggettext_compile: {
    all: {
      files: {
        'translations.js': ['po/*.po']
      }
    },
  },
  
  
  po2json: {
      options: {
        format: 'raw'
      },
      all: {
        src: ['po/*.po'],
        dest: 'i18n/'
      }
  },
  
  
  nggettext_compile: {
            all: {
                files: [
                    {
                        expand: true,
                        src: 'po/*.po',
                        dest: 'js/',
                        ext: '.js'
                    }
                ]
            }
        },
  
})

  grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.loadNpmTasks('grunt-po2json');
  
  // Default task(s).
  grunt.registerTask('default', ['nggettext_extract', 'po2json', 'nggettext_compile']);
    
};