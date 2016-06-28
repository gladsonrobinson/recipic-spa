'use strict';

/**
 * Routes for the recipic application.
 *
 * This file maps URL paths to various views in the application. This file
 * handles 'native' pages (i.e. pages that are an intrinsic part of the app).
 */
/* istanbul ignore next */
angular.module('recipic.routes', ['ui.router'])
  .config(function (
    $stateProvider,
    $urlRouterProvider,
    $urlMatcherFactoryProvider,
    $locationProvider) {

    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          main: {
            templateUrl: 'sections/recipic-page/recipic-page.html',
            controller: 'RecipicPageController as recipicPageCtrl'
          }
        }
      });
  });

