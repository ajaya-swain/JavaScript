// let a = 10;
// const b = 20
// var c = 30

// console.log(a);    //10
// console.log(b);    //20
// console.log(c);    //30
//***************************************** */

var c = 300;
let x = 900
let y= 299
if(true){
    let a = 10;     
    let x= 100
    const b = 20
    var c = 30
    c=40        // by default it acts like var
    console.log(x);     //100 (inner block value)
    console.log(y);     //299 (global scope can also be accessed in block scope)
} 
// console.log(a);    // a is not defined  //bcz "let" & 'const' are block scoped
// console.log(b);    // b is not defined
console.log(c);     //40
console.log(x);     //900 (global scope value)
//*************************************************** */
console.log("*******************************");

function one(){
    const username = "Ajaya"

    function two() {
        const website = 'youtube'
        console.log(username);  //Ajaya 
    }
    // console.log(website);  //website is not defined 
    two()
}
one()
//************************************************** */

if (true) {
    const username = "Ajaya"
    if (username === "Ajaya") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // website not defined
}
// console.log(username);  // user not defined 

//****************************************************** */

console.log(addone(5))        //6

function addone(num){
    return num + 1
}
//*************** */

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));       //7
//******************* */

console.log(addThree(5));    //Cannot access 'addTwo' // hoisting does not work here

const addThree = function(num){
    return num + 2
}


