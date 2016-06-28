'use strict';

angular.module('recipic.recipi-page-controller', [])
  .controller('RecipicPageController', function (recipiService) {

    (function (vm) {

      angular.extend(vm, {
        selectedIngredient: selectedIngredient
      });

      var filterIngredientIds = [];
      _setUp();

      function _setUp() {
        _getRecipiList([]);
      }

      function selectedIngredient(value, event) {
        if (angular.element(event.target).hasClass('rec-ingredient-item--active')) {
          filterIngredientIds.push(value);
        } else {
          filterIngredientIds.splice(filterIngredientIds.indexOf(value), 1);
        }

        _getRecipiList(filterIngredientIds);
      }

      function _getRecipiList(ingredientIds) {
        recipiService.getRecipic(ingredientIds)
          .then(function (data) {
            vm.recipiList = data;
          });
      }

    })(this);
  });

