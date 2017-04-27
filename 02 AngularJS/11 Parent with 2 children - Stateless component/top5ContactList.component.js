class Top5ContactListComponent {
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

appModule.component("myTop5ContactList", {
    templateUrl: "top5ContactList.component.html",
    controller: Top5ContactListComponent,
    bindings: {
        top5: "<",
        onSelectionChanged: "&",
    }
});

