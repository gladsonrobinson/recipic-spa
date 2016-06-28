'use strict';

describe('toggleClass', function () {
  var element;
  var compiled;

  beforeEach(module('recipic.toggle-class'));

  it('Defining a element with attribute toggle-class', inject(function ($document, $compile, $rootScope) {
    element = angular.element('<div toggle-class="active"></div>');
    compiled = $compile(element)($rootScope);
    $document.find('body').append(element);
    expect(element.hasClass('active')).to.eql(false);
    compiled.triggerHandler('click');
    expect(element.hasClass('active')).to.eql(true);
  }));

});

