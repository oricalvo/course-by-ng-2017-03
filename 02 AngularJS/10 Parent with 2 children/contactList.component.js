class ContactListComponent {
    constructor() {
        this.active = null;
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

appModule.component("myContactList", {
    templateUrl: "contactList.component.html",
    controller: ContactListComponent,
    bindings: {
        contacts: "<",
        onSelectionChanged: "&",
    }
});

