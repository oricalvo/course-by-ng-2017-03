var ObjectPool = (function() {
    "use strict";

    var nextId = 1000;
    var MAGIC_FIELD = "$$generator:id";

    function generateUniqueId(obj) {
        var magic = obj[MAGIC_FIELD];

        if (!magic) {
            magic = nextId++;
            obj[MAGIC_FIELD] = magic;
        }

        return magic;
    }

    function ObjectPool() {
        var map = {};

        return {
            add: function (obj) {

                var uniqueId = generateUniqueId(obj);
                if (map[uniqueId]) {
                    return;
                }

                map[uniqueId] = obj;

                // if(arr.indexOf(instance)!=-1) {
                //     return;
                // }

                //arr.push(instance);
            },
            get: function () {

                for (var key in map) {
                    var obj = map[key];
                    delete map[key];
                    return obj;
                }

                return null;
            }
        };
    }

    return ObjectPool;
})();
