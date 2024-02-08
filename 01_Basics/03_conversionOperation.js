let score = 33;
let isLogin = 1;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
let valueInBoolean = Boolean(isLogin);
let valueInString = String(score);

// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

// console.log(valueInBoolean);
// console.log(typeof(valueInBoolean));

// console.log(valueInString);
// console.log(typeof(valueInString));

let str1 = "Hello"
let str2 = "Ajaya"

let str = str1 + str2;
console.log(str);  

//*************increment/decrement************ */
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
