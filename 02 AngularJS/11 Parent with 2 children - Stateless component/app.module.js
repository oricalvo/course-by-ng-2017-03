var appModule = angular.module("myApp", []);

appModule.run(function(rootService) {
    rootService.loadContacts();
});
