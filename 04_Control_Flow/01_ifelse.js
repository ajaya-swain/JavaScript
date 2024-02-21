//**************if****** */
const isUserloggedIn = true;

if (2 == "2") {
  console.log("executed"); //executed
}

// <, >, <=, >=, ==, ===, !==

//************* */
const temprature = 41;

if (temprature < 50) {
  console.log("less than 50");   //less than 50
}
//****************if-else****** */
const temp = 51;

if (temp < 50) {
  console.log("less than 50");   
}
else{
    console.log("greater than 50")  //greater than 50
}
//************* */ 
const score = 200

if (score > 100) {
    let power = "fly"
    var hitpoint = "invincible"
    console.log(`user power: ${power}`)
    console.log(`user hitpoint: ${hitpoint}`)
}
console.log(`user hitpoint: ${hitpoint}`)       // user hitpoint: invincible   // BCZ it is defined as "var" 
// console.log(`user power: ${power}`)         //undefined (BCZ defined as "let")

//************************ */
const bal= 1000

if(bal > 500) console.log("test")     // implicit if statement

// if(balance > 500) console.log("test"),console.log("test2")   // bad practice of implicit statement

//********* */
const balance = 1000
if (balance < 500){
    console.log(("less than 500"))
}else if (balance < 750) {
    console.log("less than 750");
}else if (balance < 900){
    console.log("less than 900")
}else{
    console.log("less than 1500")   //less than 1500
}

//******************************* */
const userLoggedIn = true
const debitCard = true 

if (userLoggedIn && debitCard && 2==2){
    console.log("Allowed to Buy Course")  //Allowed to Buy Course
}
