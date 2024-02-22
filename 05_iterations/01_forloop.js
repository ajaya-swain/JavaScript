//*****for loop */     
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)      //print 0 - 10
}

//********************************* */
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number")   // op 0-4, 5 is best number, 5-10
    }
    console.log(element)      
}
//**************** */
for (let i = 0; i <= 3; i++) {
    console.log(`i : ${i}`)
    for (let j = 0; j <=2; j++) {
        console.log(`j : ${j} and i : ${i}`)
        
    }
}

//*************** */
console.log("************************")
for (let i = 10; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)  //print table of 10
        
    }   
}
//************************ */
let myArray = ["flash", "batman", "superman"]

for (let index = 0; index <= myArray.length-1; index++) {    //myArray.length-1 is the last element
    const element = myArray[index]
    console.log(element)            //flash  batman  superman
}

//*****************break and continue*************** */
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`)               
        break;                      //"break", Breaks the flow when the condition satisfied
    }
    console.log(`value of i is ${index}`)  // value of i is 1,2,3,4, Detected 5 
} 

//******************************** */
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue;           //"continue" Skips the condition statement and keep continuing the flow
    }
    console.log(`value of i is ${index}`)  // value of i is 1,2,3,4, Detected 5 ,6,7,8,9,10
}