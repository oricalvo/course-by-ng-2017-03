class AppComponent {
    constructor(rootService) {
        this.rootService = rootService;
    }

    gotoCleanHome() {
        this.rootService.gotoCleanHome();
    }
}

appModule.component("myApp", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});

