var ObjectPool = (function() {
    "use strict";

    var MAGIC_FIELD = "$$generator:id";
    var nextId = 1000;

    function generateUniqueId(obj) {
        var magic = obj[MAGIC_FIELD];

        if (!magic) {
            magic = nextId++;
            obj[MAGIC_FIELD] = magic;
        }

        return magic;
    }

    function ObjectPool() {
        this.map = {};
    }

    ObjectPool.prototype.add = function (obj) {
        var uniqueId = generateUniqueId(obj);
        if (this.map[uniqueId]) {
            return;
        }

        this.map[uniqueId] = obj;
    }

    ObjectPool.prototype.get = function () {

        for (var key in this.map) {
            var obj = this.map[key];
            delete this.map[key];
            return obj;
        }

        return null;
    }

    return ObjectPool;
})();
