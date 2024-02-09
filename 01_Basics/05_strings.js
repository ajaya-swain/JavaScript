const name = "Ajaya"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//***************************************************** */

const gameName = new String('ajayaswain-in') //constructor of string

console.log(gameName);      //String {'ajayaswain-in'}
console.log(gameName[0]);       //a
console.log(gameName.__proto__);   //String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}

console.log(gameName.length);       //13
console.log(gameName.toUpperCase());  //AJAYASWAIN-IN


console.log(gameName.charAt(1));       //j 
console.log(gameName.indexOf('s'));     // 5
console.log(gameName.indexOf('z'));     //-1 (bcz not present)

//************** */

const newString = gameName.substring(0, 4)
console.log(newString);                  //ajay

const anotherString = gameName.slice(4)  //aswain-in (omit till index 4)
console.log(anotherString);

const newStringOne = "   ajaya    "
console.log(newStringOne);          // '  ajaya  ' (added space both side)
console.log(newStringOne.trim());   //ajaya   (trimmed space)

const url = "https://ajayaswain.in/ajaya%20swain"
console.log(url)
console.log(url.replace('%20', '-'))  //ajayaswain.in/ajaya-swain

console.log(url.includes('ajaya'))   //true
console.log(url.includes('sahoo'))   //false

console.log(gameName.split('-'));  // ['ajayaswain', 'in'] (split on the basis of "-") 