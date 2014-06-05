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
})
  
  grunt.loadNpmTasks('grunt-angular-gettext');
  
  // Default task(s).
  grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);
    
};