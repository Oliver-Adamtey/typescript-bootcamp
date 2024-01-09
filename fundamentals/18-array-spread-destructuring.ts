
// Array Spread

const numbers = [1, 2, 3];

//spreading it's scope
const moreNumbers = [...numbers, 4, 5, 6];

console.log(moreNumbers);

const [first, second, third] = moreNumbers;

console.log(first, second, third);

