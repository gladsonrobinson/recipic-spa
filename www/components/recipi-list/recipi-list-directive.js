'use strict';

angular.module('recipic.recipi-list-directive', [])
  .directive('recRecipiList', function () {
    return {
      restrict: 'E',
      replace: false,
      scope: {
        recipiList: '='
      },
      templateUrl: 'components/recipi-list/recipi-list.html',
      controller: function () {},
      controllerAs: 'recListController',
      bindToController: true
    };
  });

