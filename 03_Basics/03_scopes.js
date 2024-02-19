// let a = 10;
// const b = 20
// var c = 30

// console.log(a);    //10
// console.log(b);    //20
// console.log(c);    //30
//***************************************** */

var c = 300;
let x = 900
if(true){
    let a = 10;     
    let x= 100
    const b = 20
    var c = 30
    c=40        // by default it acts like var
    console.log(x);     //100 (inner block value)
} 
// console.log(a);    // a is not defined  //bcz "let" & 'const' are block scoped
// console.log(b);    // b is not defined
console.log(c);     //40
console.log(x);     //900 (global scope value)
