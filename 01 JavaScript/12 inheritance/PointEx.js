var PointEx = (function() {
    "use strict";

    function PointEx(x, y, z) {
        Point.call(this, x, y);
        //Point.apply(this, [x, y]);

        this.z = z;
    }

    PointEx.prototype = Object.create(Point.prototype);

    PointEx.prototype.dump = function() {
        Point.prototype.dump.call(this);

        console.log(this.z);
    }

    PointEx.prototype.clone = function() {
    }

    return PointEx;
})();

var a = {};

var b = Object.create(a);
b.id = 123;