'use strict';

angular.module('resumeApp')
    .controller('CVCtrl', function ($scope,$routeParams,$http) {
        $scope.resumeType = $routeParams.type;

        $http.get('data/' + $scope.resumeType  + '.json').success(function(data) {
            $scope.cvData = data;
        });

    })
    .controller('CollapseCtrl', function ($scope) {
        $scope.isCollapsed=true;
        $scope.collapsedMessage = 'READ_MORE';

        $scope.$watch('isCollapsed', function (newValue) {
            if (newValue === false) {
                $scope.collapsedMessage = 'READ_LESS';
            }
            else {
                $scope.collapsedMessage = 'READ_MORE';
            }
        }, true);
    });
