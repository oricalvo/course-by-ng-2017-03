class HomeComponent {
    constructor(rootService, $state) {
        this.rootService = rootService;
        this.$state = $state;
    }

    get contacts() {
        return this.rootService.contacts;
    }

    inc() {
        this.rootService.inc();
    }

    get counter() {
        return this.rootService.counter;
    }

    gotoContactDetails(contact) {
        this.$state.go("contact", {id: contact.id});
    }
}

appModule.component("myHome", {
    templateUrl: "home.component.html",
    controller: HomeComponent,
});

