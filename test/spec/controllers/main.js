'use strict';

describe('Controller: CVCtrl', function () {

    // load the controller's module
    beforeEach(module('resumeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      MainCtrl = $controller('CVCtrl', {
          $scope: scope
      });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
