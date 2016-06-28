/*jshint globalstrict:true*/
'use strict';

/* istanbul ignore next */
angular.module('3rdParty', [])
  .factory('R', function () {
    return window.R;
  });

/* istanbul ignore next */
angular.module('recipic', [
    '3rdParty',
    'recipic.config',
    'recipic.footer',
    'recipic.index-controller',
    'recipic.ingredient-list',
    'recipic.navbar',
    'recipic.recipi-page',
    'recipic.recipi-service',
    'recipic.routes',
    'recipic.recipi-list-directive',
    'recipic.recipi-list',
    'recipic.toggle-class'
  ])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push(httpDelay);

    function httpDelay($timeout) {
      return {
        'response': function (response) {
          return $timeout(function () {
            return response;
          }, 200);
        }
      };
    }
  });

