//*****while loop***** */

let index=0
while (index <= 10) {
    console.log(`value of index is ${index}`)  //value of index is 0,2,4,6,8,10
    index= index + 2  
}
//****************** */

let myArray = ["shaktiman", "batman", "ironman"]
let i = 0
while (i < myArray.length) {
    console.log(`value is ${myArray[i]}`)  // shaktiman, batman, ironman
    i = i + 1
}

//*******************do while loop********** */
let score = 1

do {
    console.log(`score is ${score}`)   // score is 1,2,3,4,5,6,7,8,9,10
    score++
} while ( score <= 10);

//*************************** */
let scorePoint = 11

do {
    console.log(`score is ${scorePoint}`)   // score is 11
    scorePoint++
} while ( scorePoint <= 10);