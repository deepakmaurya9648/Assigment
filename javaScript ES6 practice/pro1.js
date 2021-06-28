// Compare two objects to determine if the first one contains equivalent property values to the second one

const matches=(obj,source)=>Object.keys(source).every(key=>obj.hasOwnProperty(key) && obj[key]==source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false




//some other importaint problem

const tips_isPowerOfTwo = n => !!n && (n & (n - 1)) == 0;
console.log(tips_isPowerOfTwo(3)); 
console.log(tips_isPowerOfTwo(4));
console.log(tips_isPowerOfTwo(16));

