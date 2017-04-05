function RootController($element) {
    console.log($element);

    this.show = false;
    this.$element = $element;
}

RootController.prototype.run = function() {
    //console.log("XXX");

    this.show = !this.show;

    //this.$element.append("{{yyy}}");
}

appModule.component("myRoot", {
    templateUrl: "app.component.html",
    controller: RootController,
});
