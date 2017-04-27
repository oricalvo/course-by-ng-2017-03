class ContactService {
    constructor($http, $timeout) {
        this.$http = $http;
        this.$timeout = $timeout;
    }

    init() {
        this.loading = true;

        this.$http.get("/contact").then(response =>{
            this.contacts = response.data;
            this.loading = false;
        });
    }
}

appModule.service("contactService", ContactService);

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(42);
        }, ms);
    });
}

function delayR(ms) {
    return delay(ms).then(function(res) {
        return res * 2;
    });
}
