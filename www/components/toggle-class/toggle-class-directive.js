'use strict';

angular.module('recipic.toggle-class', [])
  .directive('toggleClass', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          element.toggleClass(attrs.toggleClass);
        });
      }
    };
  });

