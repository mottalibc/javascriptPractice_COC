// How to create Date

const mydate = new Date();
// console.log(mydate);
const formatedDate = mydate.toString();
// console.log(formatedDate);
// console.log(mydate.toDateString());
// console.log(mydate.getDate());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());

const seconds = Math.floor(Date.now() / 1000);
console.log(seconds);
