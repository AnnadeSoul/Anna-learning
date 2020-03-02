// const a = [1, 2, 3, 4, 5, 6, 7];

// const [first, second, third, ...rest] = a;
// console.log('foo is the first element', second);
// console.log('rest is other stuff except the first one', rest);

// const a = [1, 2, 3, 4];
// const b = [5, 6, 7, 8];

// const c = [...a, ...b];
// console.log(c);

const package1 = {
  name: 'umd',
  version: '1.0.0'
}

const amdPackage = { ...package1 };
amdPackage.name = 'amd';
amdPackage.details = 'intelX';

const { name, ...rest } = amdPackage;

console.log(rest);
