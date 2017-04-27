class AppComponent {
    constructor(contactService) {
        this.contactService = contactService;

        delayR(500).then(function (res) {
            console.log("OK", res);
        }).catch(function () {
            console.log("ERR");
        });
    }

    get contacts() {
        return this.contactService.contacts;
    }

    get loading() {
        return this.contactService.loading;
    }
}

appModule.component("myApp", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});

