function Point(x,y) {
    return {
        dump: function() {
            console.log(x + ", " + y);
        }
    };
}

var pt1 = new Point(5, 10);
var pt2 = new Point(10, 20);

console.log(pt1.dump == pt2.dump);

pt1.dump();
pt2.dump();


