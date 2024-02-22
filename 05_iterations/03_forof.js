//*********for of loop*********** */
// array specific loop  // ["", "", ""] // [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)       //1,2,3,4,5

}

//************** */
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)    //each char 
}

//*************map*********** */

const map = new Map()
console.log(typeof(map));  //object

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);  // { 'IN' => 'India','USA' => 'United States of America','Fr' => 'France' }
                   //map takes only unique values // so cancels duplicates

for (const key of map) {
    console.log(key);     // [ 'IN', 'India' ] //  [ 'USA', 'United States of America' ] //  [ 'Fr', 'France' ]
}

for (const [key, value] of map) {     //destructure of array
    console.log(`${key} :- ${value}`)  // IN :- India // USA :- United States of America // Fr :- France
}
//****************************** */
const myObject = {
    "game1": 'NFS',
    "game2": 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);  //myObject is not iterable
    
}
//*************************** */
const myObj = new Object ()

myObj.id = "123";
myObj.name = "Ajaya"
console.log(myObj)

for (const [key, value] of myObj) {
        console.log(key, ':-', value);  //myObj is not iterable
        
    }