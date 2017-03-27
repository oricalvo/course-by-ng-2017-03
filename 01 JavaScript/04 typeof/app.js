(function() {
    "use strict";

    window.setTimeout = function() {
    }

    if (typeof JSON2 == "undefined") {
        //
        //  IE7 - no builtin support for JSON
        //
        window.JSON2 = {
            stringify: function() {
            }
        };
    }

    var obj = {
        id: 1,
        name: "Ori",
    };

    var str = JSON2.stringify(obj);

    console.log(str);

})();

function add(num1, num2) {
    //var n = 2;

    //console.log(n*2);

    return num1 + num2;
}

function g() {
    var num;

    num = 43;

    num = function() {
    }
}
