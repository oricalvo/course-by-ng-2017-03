function RootController($timeout, $scope, $element, $rootScope) {
    console.log($element);

    this.show = false;
    this.$element = $element;
    this.$rootScope = $rootScope;
    this.nums = [1,2,3];

    $scope.userName = "ori";
    $scope.password = "123";

    $timeout(()=> {
        $scope.userName = "XXX";
        console.log("userName was changed");
    }, 2000);
}

RootController.prototype.run = function() {
    //console.log("XXX");

    this.show = !this.show;

    console.log(this.$rootScope);

    //this.$element.append("{{yyy}}");
}

appModule.component("myRoot", {
    templateUrl: "app.component.html",
    controller: RootController,
});
