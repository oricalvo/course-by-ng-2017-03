var map = {};

map["blabla"] = function() {
    console.log("I am anon function");
}

map["xzyz"] = {};

map["xxx"] = 42;

map["yyy"] = 0;

delete map["yyy"];

map["yyy"] = undefined;

//if("yyy" in map) {
if(map.hasOwnProperty("yyy")) {
    console.log("EXIST");
}
else {
    console.log("NOT EXIST");
}

for(var key in map) {
    console.log(key, ": ", map[key]);
}

var arr = [100,200,300];

for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

for(var num of arr) {
    console.log(num);
}

for(var num in arr) {
    console.log(num);
}
