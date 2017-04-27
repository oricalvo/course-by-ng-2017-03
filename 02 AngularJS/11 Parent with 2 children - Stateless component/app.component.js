class AppComponent {
    constructor(rootService) {
        this.rootService = rootService;
    }

    get contacts() {
        return this.rootService.contacts;
    }

    get top5() {
        return this.rootService.top5;
    }

    add() {
        this.rootService.add(this.name);
    }

    onContactSelected($event) {
        console.log("Selection changed", $event.contact);
    }
}

appModule.component("myApp", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});

