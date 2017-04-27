class ContactDetailsComponent {
    constructor($stateParams, rootService) {
        const contactId = $stateParams.id;
        this.contact = rootService.getContactById(contactId);
    }
}

appModule.component("myContactDetails", {
    templateUrl: "contactDetails.component.html",
    controller: ContactDetailsComponent,
});

