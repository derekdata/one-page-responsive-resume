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
        $scope.collapsedMessage="read more";

        $scope.$watch('isCollapsed', function (newValue) {
            if (newValue === false) {
                $scope.collapsedMessage="read less";
            }
            else {
                $scope.collapsedMessage="read more";
            }
        }, true);
    });
