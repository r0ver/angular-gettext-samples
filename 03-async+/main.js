/*global angular, $http, myLanguageCache, console, LCookie */

var app = angular.module('myApp', ['gettext'], function () {
  "use strict";
});

app.controller('ArticleCtrl', function ($scope, gettextCatalog, $http) {
  "use strict";
  $scope.articleUrl = "http://en.wikipedia.org/wiki/Manu_Gin%C3%B3bili";

  $scope.languages = ['en', 'es'];
  $scope.lang = 'en';

  $scope.selectLanguage = function (lang) {
    var fileURLs = 'i18n/' + lang + '.json',
      promise;

    promise = $http({
      method: 'GET',
      url: fileURLs
    }).then(function (response) {
      gettextCatalog.currentLanguage = lang;
      gettextCatalog.setStrings(lang, response.data[0].strings);
    });
  };
});

app.run(function (gettextCatalog) {
  "use strict";
  gettextCatalog.currentLanguage = 'en';
  gettextCatalog.debug = true;
});