const userEmail = "ajaya@gmail.com"  

if (userEmail) {
    console.log("Got user email");   //Got User email
} else {
    console.log("Don't have user email");
}

//******************* */
const userEmail01 = ""  

if (userEmail01) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");  //Don't have user email
}

//**************** */
const userEmail02 = []

if (userEmail02) {
    console.log("Got user email");   ////Got User email
} else {
    console.log("Don't have user email");
}

//**********falsy values **********/
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//************truthy values****** */
// "0", "false", " ", [], {}, function(){}

//****************** */
const userEmail03 = []
console.log(userEmail03.length)  //0

if (userEmail03.length === 0) {
    console.log("Array is empty") //Array is empty
}

//****************** */

const obj ={}

console.log(obj)                  //{}
console.log(Object.keys(obj))        //[]
console.log(Object.keys(obj).length)    //0
console.log(Object.values(obj).length)  //0
console.log(obj.length)                 //undefined (bcz wrong format)

if (Object.keys(obj).length === 0){    
    console.log("Object is empty")      //Object is empty
}

//*******Nullish Coalescing Operator (??): null undefined ********/

let val1;
let val2;
let val3;
let val4;
let val5;

val1 = 5 ?? 10
val2= null ?? 11
val3= undefined ?? 19   
val4= null ?? 30 ?? 20 ?? undefined  
val5= null ?? undefined  

console.log(val1)   //5
console.log(val2)   //11
console.log(val3)   //19
console.log(val4)   //30
console.log(val5)   //undefined

//***************Ternary Operator******************* */
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")   // more than 80
