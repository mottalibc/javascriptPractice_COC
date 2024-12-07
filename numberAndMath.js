// -------------------Define Number-------------------------
const num = 10;
const number = new Number(10);

// console.log(num, number);

// ---------------------------Math---------------------------
const floor = Math.floor(10.5); //Floor the number
const ceil = Math.ceil(10.5); //Ceil the number
const round = Math.round(10.5); //Round the number
const random = Math.random(); //give random number
const underTen = Math.random() * 10; //Random number 0 to 10
const underTenWithoutZero = Math.random() * 10 + 1; //Must be provides random number  under 10 without zero

// console.log(floor, ceil, round, random, underTen, underTenWithoutZero);

// Min-Max

const max = 20;
const min = 10;

console.log(Math.random() * (max - min + 1) + min);
