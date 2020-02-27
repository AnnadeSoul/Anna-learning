// const formatTitle = ({ title }) => {
//   switch (title) {
//     case 'Anya':
//       return 'Hi, Anna Chechelnitskaya';
//     case 'Dima':
//       return 'Hi, Dima Rashydov';
//     case 'Denis':
//       return 'Hello Solobushek';
//     default:
//       return 'Hi, no matter who you are'
//   }
// };

// const titleForAnya = anya => anya && 'Hi, Anna Chechelnitskaya';
// const titleForDima = dima => dima && 'Hi, Dima Rashydov';
// const titleForSolobushek = denis => denis && 'Hello Solobushek';

// const formatTitle = (title) => {
//   return (message) => `${message} ${title}`;
// };

// console.log(formatTitle('Anechka')('Hi my dear'));


// const firstDataSet = { title: 'Anya' };
// const secondDataSet = { title: 'Dima' };P
// const thirdDataSet = { title: 'Denis' };
// const forthDataSet = {};

// console.log(formatTitle(secondDataSet));

import DimaLoves, { hello } from './hey.js';

console.group();
console.log(hello);
// console.log(hiFromDima);
console.log(DimaLoves('Anechka'));
console.groupEnd();