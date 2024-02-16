const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);        // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);  // flash

//********* */

const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros);       //['thor','Ironman','spiderman','superman','flash','batman']  

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);  //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//***************************** */

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //used to spread all sub-array
console.log(real_another_array);  // (11) [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]   


console.log(Array.isArray("Ajaya"))     //false
console.log(Array.from("Ajaya"))         //(5) ['A', 'j', 'a', 'y', 'a']  // it will make an array from "Ajaya"
console.log(Array.from(111))            // [] (empty array  i.e unable to make)
console.log(Array.from({name: "Ajaya"})) // [] (empty array  i.e unable to make)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]   //it will make an array from set of elements/variables