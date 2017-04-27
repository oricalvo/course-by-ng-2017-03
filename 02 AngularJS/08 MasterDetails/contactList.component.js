class ContactListController {
    constructor(contactService) {
        this.state = contactService;
    }

    select(contact) {
        console.log("Selecting", contact);

        this.state.selectedContact = contact;
    }

    isSelected(contact) {
        var res = contact == this.state.selectedContact;
        return res;
    }
}

appModule.component("myContactList", {
    controller: ContactListController,
    templateUrl: "contactList.component.html",
});