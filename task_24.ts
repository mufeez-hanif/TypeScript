let Name: string = "Mufeez";
let Name1: string = "mufeez";
// Tests for equality and inequality with strings
if (Name === Name1) console.log("Both strings are equal and same");
else console.log("The strings are not equal or different");

// Tests using the lower case function
if (Name.toLowerCase() === Name1.toLowerCase()) console.log("Name and Name1 are equal when they are in lower case");
console.log("Strings are not equal");

// Comparing numbers 
const num1: number = 10;
const num2: number = 5;

console.log(`num1 > num2: ${num1 > num2}`);
console.log(`num1 < num2: ${num1 < num2}`);
console.log(`num1 >= num2: ${num1 >= num2}`);
console.log(`num1 <= num2: ${num1 <= num2}`);
console.log(`num1 === num2: ${num1 === num2}`);
console.log(`num1 !== num2: ${num1 !== num2}`);


// And and or operator

let x1: number = 34; let x2: number = 21; let x3: number = 43;
if (x1 > x2 && x1 > x3) console.log("X1 is the biggest number");
if (x2 > x1 && x2 > x3) console.log("X2 is the biggest number");
if (x3 > x2 && x3 > x1) console.log("X3 is the biggest number");

// check whether an item is in an array or not

let temp: number = 43;
let myArr: number[] = [42, 54, 54, 23, 54, 65, 64, 45];

console.log("43 exist in array: ", myArr.includes(temp));
console.log("43 not exist in array: ", !(myArr.includes(temp)));