//var createObjectPool = require("./objectPool").createObjectPool;

var pool = new ObjectPool();

pool.map = "djduihd";

var ori = {
    name: "Ori"
};

pool.add(ori);
pool.add(ori);

var res = pool.get();

console.log(res == ori);

res = pool.get();
console.log(res == null);
