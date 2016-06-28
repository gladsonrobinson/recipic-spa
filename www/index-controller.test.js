'use strict';

describe('IndexController', function () {

  var IndexController;

  beforeEach(module('recipic.index-controller'));
  beforeEach(inject(initController));

  it('is constructed properly', function () {
    expect(IndexController).to.be.an('Object');
  });

  function initController($controller) {
    IndexController = $controller('IndexController');
  }

});

