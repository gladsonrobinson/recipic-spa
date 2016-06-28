'use strict';

angular.module('recipic.ingredient-list-controller', [])
  .controller('IngredientListController', function (recipiService) {
    (function (vm) {

      _setup();

      function _setup() {
        recipiService.getAllIngredients()
          .then(function (responce) {
            vm.ingredients = responce;
          });
      }
    })(this);
  });

