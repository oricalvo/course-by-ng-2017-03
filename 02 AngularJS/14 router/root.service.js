class RootService {
    constructor($state) {
        this.$state = $state;
        this.counter = 0;
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
    }

    inc() {
        ++this.counter;
    }

    gotoCleanHome() {
        this.counter = 0;

        this.$state.go("home");
    }

    getContactById(id) {
        const contact = this.contacts.find(c => c.id == id);
        if(!contact) {
            throw new Error("Contact with id " + id + " was not found");
        }

        return contact;
    }
}

appModule.service("rootService", RootService);
