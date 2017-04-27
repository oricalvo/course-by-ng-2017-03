const express = require("express");
const {getAllContacts} = require("./dal");
const app = express();

app.get("/contact", async function(req, res) {
    await delay(2500);
    const contacts = await getAllContacts();
    res.json(contacts);
});

const basePath = __dirname;
console.log(basePath);
app.use(express.static(basePath));

app.listen(3000, function() {
    console.log("Server is running");
});

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });

    // return {
    //     then: function() {
    //     }
    // };
}
