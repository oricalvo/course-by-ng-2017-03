class ContactDetailsController {
    constructor(contactService) {
        this.state = contactService;
    }
}

appModule.component("myContactDetails", {
    controller: ContactDetailsController,
    templateUrl: "contactDetails.component.html",
});