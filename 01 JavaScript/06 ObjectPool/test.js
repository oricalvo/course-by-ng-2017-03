//var createObjectPool = require("./objectPool").createObjectPool;

var pool = createObjectPool();

var ori = {
    name: "Ori"
};

pool.add(ori);
pool.add(ori);

var res = pool.get();

console.log(res == ori);

res = pool.get();
console.log(res == null);
