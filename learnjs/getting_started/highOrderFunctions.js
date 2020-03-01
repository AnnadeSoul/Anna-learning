const arr = [1, 2, 3, 4, 2, 5];

// console.table(arr);

// .map

// const squares = num => num * num;
// const squares = arr.map(item => item * item);

// console.log('squares %O', squares);
// console.log('original %O', arr);

// .filter
// const withoutTwo = arr.filter(i => i === 2);
// console.log(withoutTwo);

// .forEach

// =====
// .reduce
const sumOfElements = arr.reduce((acc, val) => acc + val, -10);
console.log(sumOfElements);
