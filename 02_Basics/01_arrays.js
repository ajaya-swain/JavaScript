// array

const myArr1 = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)    //create array

console.log(myArr1);            //(6) [0, 1, 2, 3, 4, 5]
console.log(myArr2);            //(4) [1, 2, 3, 4]
console.log(`myArr1 is ${typeof(myArr1)}, myArr2 is ${typeof(myArr2)}`); //myArr1 is object, myArr2 is object 
console.log(myArr1[1]);         //1
console.log(myArr2[1]);         //2

//**************Array methods********************

const myArr = [0, 1, 2, 3, 4, 5]  //(6) [0, 1, 2, 3, 4, 5, 6]

myArr.push(6)
myArr.push(7)
console.log(myArr);   //(8) [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop()
myArr.pop()
console.log(myArr);   //(6) [0, 1, 2, 3, 4, 5]

myArr.unshift(9)        // insert 9 in first and shift all to next index
console.log(myArr);   //(7) [9, 0, 1, 2, 3, 4, 5]
myArr.shift()
console.log(myArr);   // (6) [0, 1, 2, 3, 4, 5]

console.log(myArr.includes(9));  //false (i.e "9" isnot present)
console.log(myArr.includes(3));  //true (i.e "3" is present)
console.log(myArr.indexOf(9));  //-1 (bcz not present)
console.log(myArr.indexOf(3));  //3

//*************** */

const newArr = myArr.join()     //add all the elements of array into a string

console.log(myArr);     //(6) [0, 1, 2, 3, 4, 5]
console.log( newArr);   //0,1,2,3,4,5 
console.log( typeof(newArr)); //string


//*************  slice, splice*******************/
console.log("************************");
console.log("A ", myArr);       // A  (6) [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)   // slice between index 1 and 3 (3 is not included)
console.log(myn1);          //(2) [1, 2]
console.log("B ", myArr);   //B  (6) [0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3)  // splice takes out the part between 1 to 3 (3 is included)
console.log(myn2);          // (3) [1, 2, 3] 
console.log("C ", myArr);   // C  (3) [0, 4, 5]  (remaining Array after splice part)