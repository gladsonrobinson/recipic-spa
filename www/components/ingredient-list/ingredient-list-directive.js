'use strict';

angular.module('recipic.ingredient-list-directive', [])
  .directive('recIngredientList', function () {
    return {
      restrict: 'E',
      replace: false,
      scope: {
        selectedIngredient: '&'
      },
      templateUrl: 'components/ingredient-list/ingredient-list.html',
      controller: 'IngredientListController',
      controllerAs: 'ingredientListController',
      bindToController: true,
      transclude: true
    };
  });

