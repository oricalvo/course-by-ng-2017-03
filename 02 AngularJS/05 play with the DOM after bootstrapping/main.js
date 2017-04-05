
var html = document.querySelector("html");
if(!html) {
    throw new Error("No html element was found");
}

angular.bootstrap(html, [appModule.name]);
