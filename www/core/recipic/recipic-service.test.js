'use strict';

describe('recipiService', function () {
  var service;
  var $httpGetMocks = {};

  beforeEach(module('recipic.recipi-service'));
  beforeEach(module(initMocks));
  beforeEach(inject(initService));

  it('should get all ingredients on calling getAllIngredients', function () {
    var mockIngredientResponce = {
      data: {
        data: [{
          '_id': '3456',
          'ingredient': 'Butter, softened'
        }]
      }
    };
    $httpGetMocks['/mock/ingredients.json'] = mockIngredientResponce;
    return service.getAllIngredients()
      .then(function (responce) {
        expect(responce).eql(mockIngredientResponce.data.data);
      });
  });

  it('should get all the recipic on calling getRecipic with empty ingredientIds', function () {
    var mockRecipicResponce = {
      data: {
        data: [{
          '_id': '343443',
          'ingredients': ['6365', '3472', '3452', '5622', '3672', '5454', '5667', '3456'],
          'recipe_title': 'Apple and vanilla tea cake',
          'image_url': '/mock/images/apple-and-vanilla-tea-cake-30252_l.jpeg',
          'recipi': 'Test recipic description'
        }]
      }
    };

    $httpGetMocks['/mock/recipic.json'] = mockRecipicResponce;
    return service.getRecipic([])
      .then(function (responce) {
        expect(responce).eql(mockRecipicResponce.data.data);
      });
  });

  it('should get all the recipic on calling getRecipic with ingredientIds', function () {
    var mockRecipicResponce = {
      data: {
        data: [{
          '_id': '343443',
          'ingredients': ['6365', '3472', '3452', '5622', '3672', '5454', '5667', '3456'],
          'recipe_title': 'Apple and vanilla tea cake',
          'image_url': '/mock/images/apple-and-vanilla-tea-cake-30252_l.jpeg',
          'recipi': 'Test recipic description'
        }]
      }
    };
    $httpGetMocks['/mock/recipic.json'] = mockRecipicResponce;
    var ingredientIds = ['6365', '5622'];
    return service.getRecipic(ingredientIds)
      .then(function (responce) {
        expect(responce).eql(mockRecipicResponce.data.data);
      });
  });

  function initMocks($provide) {
    var $httpMock = {
      get: function (uri) {
        return Q.when($httpGetMocks[uri]);
      }
    };

    $provide.factory('$http', function () {
      return $httpMock;
    });
  }

  function initService(recipiService) {
    service = recipiService;
  }
});

