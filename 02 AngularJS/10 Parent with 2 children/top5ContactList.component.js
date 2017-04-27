class Top5ContactListComponent {
    constructor() {
        this.active = null;
    }

    $onChanges(changes) {
        console.log("onChanges", changes);

        this.top5 = this.contacts.slice(0,2);
    }

    select(contact) {
        if(this.active == contact) {
            return;
        }

        if(this.active) {
            this.active.isSelected = false;
        }

        this.active = contact;
        this.active.isSelected = true;

        this.onSelectionChanged({$event: {contact: this.active,  num1: 1, num2: 2}});
    }
}

appModule.component("myTop5ContactList", {
    templateUrl: "top5ContactList.component.html",
    controller: Top5ContactListComponent,
    bindings: {
        contacts: "<",
        onSelectionChanged: "&",
    }
});

