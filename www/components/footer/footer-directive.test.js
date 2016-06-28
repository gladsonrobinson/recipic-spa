'use strict';

describe('recFooter', function () {
  var $compile;
  var $rootScope;
  var footerElement;

  beforeEach(module('recipic.footer-directive'));
  beforeEach(module('components/footer/footer.html'));
  beforeEach(inject(initServices));

  it('should compile content properly', function () {
    var scope = $rootScope.$new();

    footerElement = $compile(
      '<rec-footer>' +
      '</rec-footer>')(scope);
    expect(footerElement.html().trim());
    scope.$digest();
  });

  function initServices(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }

});

