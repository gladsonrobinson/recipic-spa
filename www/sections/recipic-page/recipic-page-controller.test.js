'use strict';

describe('RecipicPageController', function () {

  var RecipicPageController;
  var recipiServiceMock;

  beforeEach(module('recipic.recipi-page-controller'));
  beforeEach(module(initMocks));
  beforeEach(inject(initController));

  it('is constructed properly', function () {
    expect(RecipicPageController).to.be.an('Object');
  });

  it('should call getRecipic on setup', function () {
    expect(recipiServiceMock.getRecipic.calledOnce).to.eql(true);
  });

  it('should call selectedIngredient on selecting ingredients', function () {
    var event = {
      target: '<div></div>'
    };
    RecipicPageController.selectedIngredient(4566, event);
    expect(recipiServiceMock.getRecipic.calledTwice).to.eql(true);

    event = {
      target: '<div class="rec-ingredient-item--active"></div>'
    };
    RecipicPageController.selectedIngredient(4566, event);
    expect(recipiServiceMock.getRecipic.calledThrice).to.eql(true);
  });

  function initMocks($provide) {
    recipiServiceMock = {
      getRecipic: sinon.spy(function () {
        return Q.when();
      })
    };

    $provide.service('recipiService', function () {
      return recipiServiceMock;
    });
  }

  function initController($controller) {
    RecipicPageController = $controller('RecipicPageController');
  }

});

