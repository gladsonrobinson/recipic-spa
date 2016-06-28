'use strict';

describe('IngredientListController', function () {

  var IngredientListController;
  var recipiServiceMock;

  beforeEach(module('recipic.ingredient-list-controller'));
  beforeEach(module(initMocks));
  beforeEach(inject(initController));

  it('is constructed properly', function () {
    expect(IngredientListController).to.be.an('Object');
  });

  it('should call getAllIngredients on setup', function () {
    expect(recipiServiceMock.getAllIngredients.calledOnce).to.eql(true);
  });

  function initMocks($provide) {
    recipiServiceMock = {
      getAllIngredients: sinon.spy(function () {
        return Q.when();
      })
    };

    $provide.service('recipiService', function () {
      return recipiServiceMock;
    });
  }

  function initController($controller) {
    IngredientListController = $controller('IngredientListController');
  }

});

