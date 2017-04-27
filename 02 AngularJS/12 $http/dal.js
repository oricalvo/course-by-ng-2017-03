exports.getAllContacts = function getAllContacts() {
    //return Promise.reject(new Error("Ooops"));

    return Promise.resolve([
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ]);
}
