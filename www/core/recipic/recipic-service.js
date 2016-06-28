'use strict';

angular.module('recipic.recipi-service', [])
  .factory('recipiService', function ($http) {

    var service = {
      getAllIngredients: getAllIngredients,
      getRecipic: getRecipic
    };

    function getAllIngredients() {
      return $http.get('/mock/ingredients.json')
        .then(function (responce) {
          return responce.data.data;
        });
    }

    function getRecipic(ingredientIds) {
      var params = {
        ids: JSON.stringify(ingredientIds)
      };
      return $http.get('/mock/recipic.json', {
        params: params
      }).then(_filterOnIngredientIds(ingredientIds));
    }

    // A mock filter to filter recipi on selected ingredient ids.
    function _filterOnIngredientIds(ingredientIds) {
      return function (responce) {
        if (ingredientIds.length) {
          return R.filter(function (res) {
            return R.intersection(res.ingredients, ingredientIds).length > 0;
          }, responce.data.data);
        } else {
          return responce.data.data;
        }
      };
    }

    return service;
  });

