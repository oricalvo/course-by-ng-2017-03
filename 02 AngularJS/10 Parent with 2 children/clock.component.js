function ClockController($interval) {
    console.log("Clock.ctor");

    this.time = new Date();

    $interval(() => {
        this.time = new Date();
    }, 1000);
}

appModule.component("myClock", {
    templateUrl: "clock.component.html",
    controller: ClockController,
});
