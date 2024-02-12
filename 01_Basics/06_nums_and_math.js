const score = 400
console.log(score);

const bal= 100;
console.log(typeof(bal))     //number

const balance = new Number(100)

console.log(balance);
console.log(typeof(balance))    //object
console.log(balance.toString()) //100
console.log(typeof(balance.toString())) //string

console.log(balance.toString().length); //3    
console.log(balance.toString()[0]); //1 


console.log(balance.toFixed(2)); // 100.00 (used in ecom)
console.log(balance.toFixed(5)); // 100.00000

//**************************************************** */

const otherNumber = 123.8966   

console.log(otherNumber.toPrecision(4)); //123.9
console.log(otherNumber.toPrecision(5)); //123.90
console.log(otherNumber.toPrecision(6)); //123.897
console.log(otherNumber.toPrecision(3)); //124

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000  (us standard)
console.log(hundreds.toLocaleString('en-IN')); //10,00,000  (indian standard)

//**************** Maths ******************************/ 

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)