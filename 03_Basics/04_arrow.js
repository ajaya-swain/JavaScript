const user = {
    username: "Ajaya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()  // Ajaya , welcome to website  // {username: 'Ajaya',price: 999,welcomeMessage: [Function: welcomeMessage]}

user.username = "Aju"
user.welcomeMessage()  //Aju , welcome to website // {username: 'Ajaya',price: 999,welcomeMessage: [Function: welcomeMessage]}

console.log(this);  // {}  //it is the window object in a browser
console.log(this);  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}  

//********************************************************** */


function chai () {
    let username = "Ajaya"
    console.log(this.username);  //undefined // this keyword only works in objects
    console.log(this)  //{}  // <ref *1> Object [global] {}
}
chai()
//********************************** */

 const chai01 = () => {
    let username = "Ajaya"
    console.log(this.username);
    console.log(this)       //{}
 }
 chai01()       //undefined

//****************arrow functions************************** */

const addTwo = (num1,num2) => {
    return num1 + num2          //explicit return (have return keyword)
}
console.log(addTwo(3,2))  //5

//**********************Implicit return **************/

const addTwo01 = (num1,num2) => num1 + num2

console.log(addTwo01(3,9))  //12
//*************************************** */

const addTwo02 = (num1,num2) => (num1 + num2)

console.log(addTwo02(10,9))   //19
//**************************************** */

const addTwo03 = (num1,num2) => ({username: "Ajaya"})

console.log(addTwo03(10,9))  // {username: 'Ajaya'}
console.log(addTwo03())    // {username: 'Ajaya'}
//****************************************************** */

