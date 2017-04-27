class AppComponent {
    constructor($interval) {
        this.originalData = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ];

        this.contacts = [].concat(this.originalData);

        $interval(()=> {
            var contact = {id: -1, name: "NewContact"};
            this.originalData.push(contact);
        }, 1500);
    }

    add() {
        var contact = {id: -1, name: this.name};
        this.contacts.push(contact);
    }

    onContactSelected($event) {
        console.log("Selection changed", $event.contact);
    }
}

appModule.component("myApp", {
    templateUrl: "app.component.html",
    controller: AppComponent,
});

