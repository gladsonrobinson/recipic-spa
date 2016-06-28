'use strict';

angular.module('recipic.footer-directive', [])
  .directive('recFooter', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/footer/footer.html',
      scope: true,
      controller: function () {},
      controllerAs: 'footerController',
      bindToController: true
    };
  });

