(function() {
    "use strict";

    var appModule = angular.module("myApp", []);

    function HomeCtrl($scope, $http) {

        $http.get("contacts.json").then(function(response) {
            $scope.contacts = response.data;
        });

        $scope.name = "XXX";

        $scope.add = function() {
            var contact = {
                id: -1,
                name: $scope.name
            };

            $scope.contacts.push(contact);
        }

    }

    appModule.controller("HomeCtrl", HomeCtrl);
})();
