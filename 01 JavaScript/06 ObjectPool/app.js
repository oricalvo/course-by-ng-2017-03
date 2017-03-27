var pool = createObjectPool();

var ori = {};

pool.add(ori);
pool.add(ori);

var res = pool.get();

console.log(res == ori);

res = pool.get();
console.log(res == null);

