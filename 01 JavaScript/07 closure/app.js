function outer() {
    var num = 0;

    function inner() {
        console.log(num++);
    }

    return inner;
}

var g = outer();
g();
g();
