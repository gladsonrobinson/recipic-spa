'use strict';

angular.module('recipic.navbar-directive', [])
  .directive('recNavBar', function () {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'components/navbar/navbar.html'
    };
  });

