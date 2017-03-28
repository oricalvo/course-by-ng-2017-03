var AppComponent = (function () {
    function AppComponent() {
        this.counter = 0;
    }
    AppComponent.prototype.inc = function () {
        this.counter++;
    };
    return AppComponent;
}());
appModule.component("myApp", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});
//# sourceMappingURL=app.component.js.map