'use strict';

describe('Controller: CollapseCtrl', function () {

    // load the controller's module
    beforeEach(module('resumeApp'));

    var CollapseCtrl,
        scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      CollapseCtrl = $controller('CollapseCtrl', {
          $scope: scope
      });
  }));

    it('should handle collapse and expansion properly', function () {

        expect(scope.isCollapsed).toBe(true);
        expect(scope.collapsedMessage).toBe("read more");

        scope.isCollapsed = false;
        scope.$digest();
        expect(scope.isCollapsed).toBe(false);
        expect(scope.collapsedMessage).toBe("read less");

        scope.isCollapsed = true;
        scope.$digest();
        expect(scope.isCollapsed).toBe(true);
        expect(scope.collapsedMessage).toBe("read more");
    });
});
