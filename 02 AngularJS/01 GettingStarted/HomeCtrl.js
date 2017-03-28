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

        $scope.remove = function(contact, index) {
            if(confirm("Delete contact " + contact.name + " ?")) {
                $scope.contacts.splice(index, 1);
            }
        }

    }

    appModule.controller("HomeCtrl", HomeCtrl);
})();
