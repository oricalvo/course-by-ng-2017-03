//var createObjectPool = require("./objectPool").createObjectPool;

var pool1 = new ObjectPool();
var pool2 = new ObjectPool();

var ori = {
    name: "Ori"
};

var roni = {
    name: "roni",
};

pool1.add(ori);

pool2.add(ori);
pool2.add(roni);

var res1 = pool2.get();
var res2 = pool2.get();

if(res2!=null) {
    console.log("PASS");
}
else {
    console.log("FAILED");
}
