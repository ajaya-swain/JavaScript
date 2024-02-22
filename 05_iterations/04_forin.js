//***********for in loop*********** */
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
console.log("*********************")
console.log(myObject.js)
// console.log(myObject[js])    //js is not defined
console.log("*********************")

for (const key in myObject) {
    console.log(key)            //js, cpp, rb, swift
}

// for (const key of myObject){
//     console.log(key)            // myObject is not iterable
// }

for (const key in myObject){
    console.log(myObject[key])     //javascript, C++, ruby, swift by apple
}
//****************************** */

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);               //0 1 2 3 4 
}
for (const key in programming) {    
    console.log(programming[key]);   // js rb py java cpp
}

console.log("********************")

for (const key of programming) {    
    console.log(key);               // js rb py java cpp
}

//********************************8******** */ */

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key)   // no response
}

for (const key of map) {
    console.log(key)     //[ 'IN', 'India' ] //  [ 'USA', 'United States of America' ] //  [ 'Fr', 'France' ]
}
