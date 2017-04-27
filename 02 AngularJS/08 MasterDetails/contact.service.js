class ContactService {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ];

        this.selectedContact = null;
    }
}

appModule.service("contactService", ContactService);
