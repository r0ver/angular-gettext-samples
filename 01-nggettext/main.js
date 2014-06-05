/*global angular*/

var app = angular.module('myApp', ['gettext'], function () {
  "use strict";
});
      
app.controller('ArticleCtrl', function ($scope, gettextCatalog) {
  "use strict";
  $scope.articleUrl = "http://en.wikipedia.org/wiki/Manu_Gin%C3%B3bili";

  $scope.languages = ['en', 'es'];
  $scope.lang = 'en';
    
  $scope.changeLanguage = function () {
    gettextCatalog.currentLanguage = $scope.lang;
  };
});

app.run(function (gettextCatalog) {
  "use strict";
  gettextCatalog.currentLanguage = 'en';
  gettextCatalog.debug = true;
});