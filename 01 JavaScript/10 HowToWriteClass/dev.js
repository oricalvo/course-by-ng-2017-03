const shelljs = require("shelljs");
const path = require("path");
const open = require("open");

shelljs.exec(path.normalize("node_modules/.bin/http-server"), {
    async: true
});

open("http://localhost:8080/index.html");
