// singleton
// Object.create

// ****************object literals*********************

const mySym = Symbol("key1")

const JsUser = {
    name: "Ajaya",
    "full Name": "Ajaya Swain",   // used for key having space
    age: 24,
    [mySym]: "mykey1",
    mySymb: "second key",
    location: "Bhubaneswar",
    email: "ajayaswain.in@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser)

console.log(JsUser.email)       //ajayaswain.in@gmail.com
console.log(JsUser["email"])    //ajayaswain.in@gmail.com
console.log(JsUser["full Name"])  // Ajaya Swain

console.log(JsUser[mySym])  //mykey1

console.log(JsUser.mySymb)      //second key
console.log(JsUser["mySymb"])   //second Key

console.log(typeof(JsUser[mySym]))  //string
console.log(typeof(JsUser.mySymb))      //string
console.log(typeof(JsUser["mySymb"]))   //string


JsUser.email = "ajaya@google.com"  //change value
// Object.freeze(JsUser)           //lock the object 

JsUser.email = "ajaya@microsoft.com"  
console.log(JsUser);             // 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); 
}
console.log(JsUser.greeting);  //[Function (anonymous)] 
console.log(JsUser.greeting());  //Hello JS user
console.log(JsUser.greetingTwo());  // Hello JS user Ajaya