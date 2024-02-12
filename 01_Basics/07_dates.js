// Dates

let myDate = new Date();
console.log(myDate);    //Mon Feb 12 2024 15:05:14 GMT+0530 (India Standard Time)
console.log(typeof(myDate));  //object

console.log(myDate.toString());  //Mon Feb 12 2024 15:15:14 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Mon Feb 12 2024
console.log(myDate.toLocaleDateString());  //2/12/2024
console.log(myDate.toLocaleTimeString());   //3:18:04 PM
console.log(myDate.toLocaleString());   //2/12/2024, 3:21:06 PM
console.log(myDate.toISOString());  //2024-02-12T09:47:45.803Z
console.log(myDate.toJSON());   //2024-02-12T09:45:50.963Z

//************************************* */

// let myCreatedDate = new Date(2023,0,23)  
// console.log(myCreatedDate);  // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("1-14-2023")  
console.log(myCreatedDate.toLocaleString()); //1/14/2023, 5:30:00 AM

//*************************************************** */

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //1707733440391 (it changes every millisecond)

console.log(myCreatedDate.getTime());  //1673634600000 (millisecond value of our declared date)
console.log((Date.now()/1000));     //1707734472.176
console.log(Math.floor(Date.now()/1000)); //1707734472 (convert to seconds and to get floor value)

//****************************************** */

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 ); //2 (i.e february)
console.log(newDate.getDay()); //1 (i.e monday)
console.log(newDate.getTime()); //

console.log("******************************"); 

// console.log(`TODAY IS ${newDate.getDay()} AND MONTH IS ${newDate.getMonth() + 1}`); //TODAY IS 1 AND MONTH IS 2
                  

let x = newDate.toLocaleString('default', {
    weekday: "long", 
})
console.log(x);   //Monday (full name of weekday bcz of "long")

console.log("******************************");