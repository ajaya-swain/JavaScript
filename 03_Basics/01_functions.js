function sayMyName(){
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("Y");
    console.log("A");
}

sayMyName()
//************************** */

function addTwoNumbers(num1, num2){  // num1 & num2 are "parameters"
    console.log(num1 + num2);
}
addTwoNumbers(1,9)     //10     // 1 & 9 are "Arguments"
addTwoNumbers(1,"9")     //19
//*********************************************** */

function addTwoNumbers2(number1, number2){
    let result = number1 + number2
    return result
    return number1 + number2    //will not execute bcz after return nothing executes in a function
}
const result = addTwoNumbers2(17,3)  //return statement must be stored in a variable
console.log("result:", result);     //result: 20
//********************************************* */

function addTwoNumbers3(number1, number2){
    return number1 + number2    
}
let x= addTwoNumbers3(55,20)   
console.log(x);     //75

//************************************************ */

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Ajaya"))  //Ajaya just logged in
//****************************************************** */

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a Username");  //Please enter a Username
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())     //undefined

//*********OR*********** */

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a Username");  //Please enter a Username
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())     //undefined

//************************** */
function loginUserMessage2(username = "Aj"){
    if(!username){
        console.log("Please enter a Username");  //Please enter a Username
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2())     //Aj just logged in
console.log(loginUserMessage2("Ajaya"))     //Ajaya just logged in
