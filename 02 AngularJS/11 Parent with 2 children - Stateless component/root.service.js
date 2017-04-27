class RootService {
    constructor() {
        this.contacts = null;
        this.nextId = -1;
    }

    loadContacts() {
        this.setContacts([
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
            {id:4, name: "Galia"},
            {id:5, name: "Carmit"},
        ]);
    }

    add(name) {
        var contact = {id: this.nextId--, name: name};
        //var contacts = [contact].concat(this.contacts);
        this.contacts.unshift(contact);

        this.setContacts(this.contacts);
    }

    setContacts(contacts) {
        this.contacts = contacts;
        this.top5 = this.calcTop5();
    }

    calcTop5() {
        return this.contacts.slice(0, 2);
    }
}

appModule.service("rootService", RootService);