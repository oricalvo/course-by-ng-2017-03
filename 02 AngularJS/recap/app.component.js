function RootController() {
    console.log("Root.ctor");

    this.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ];
}

appModule.component("myRoot", {
    templateUrl: "app.component.html",
    controller: RootController,
});
