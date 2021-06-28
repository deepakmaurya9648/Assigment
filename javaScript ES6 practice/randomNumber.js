// generating a random number

// const a=Math.random();
// console.log(a);

// Example 2: Get a Random Number between 1 and 10

const max =50;
const min =1;
const a=Math.floor(Math.random()*(max-min+1))+min;
// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
