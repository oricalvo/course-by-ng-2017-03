
function Counter() {
    var num = 0;

    return {
        inc: function() {
            ++num;
        },
        dec: function() {
            --num;
        },
        get: function() {
            return num;
        }
    };
}

var c1 = new Counter();
c1.inc();
c1.inc();

var c2 = new Counter();
c2.dec();

console.log(c1 == c2);
console.log(c1.get());
console.log(c2.get());

