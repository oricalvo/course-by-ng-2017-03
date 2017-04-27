var appModule = angular.module("myApp", ['ui.router']);

appModule.config(function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state({
        name: "home",
        url: "/home",
        template: "<my-home></my-home>",
    });

    $stateProvider.state({
        name: "about",
        url: "/about",
        template: "<h1>About</h1>",
    });

    $stateProvider.state({
        name: "contact",
        url: "/contact/:id",
        template: "<my-contact-details></my-contact-details>",
    });
});

appModule.run(function() {
});
