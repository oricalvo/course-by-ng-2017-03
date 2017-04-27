class AppComponent {
    constructor($interval) {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
            {id:4, name: "Galia"},
            {id:5, name: "Carmit"},
        ];
    }

    add() {
        var contact = {id: -1, name: this.name};
        this.contacts = [contact].concat(this.contacts);
    }

    onContactSelected($event) {
        console.log("Selection changed", $event.contact);
    }
}

appModule.component("myApp", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});

