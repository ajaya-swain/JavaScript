function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));     //2

//******************************************** */

function calculateCartPrice(...num1){   //"...num1" is spread operator and also rest operator
    return num1
}
console.log(calculateCartPrice(200,500,900));  // [200, 500, 900]

//**************************************** */
function calculateCartPrice02(val1,val2,...num1){   
    return num1
}
console.log(calculateCartPrice02(200,500,900,1000));  //[900,1000] (bcz 200,500 assigned to val1,val2)
//********************************* */

const user = {
    username: "Ajaya",
    price: 199
}

function handleObject(anyobject) {
 console.log(`UserName is ${anyobject.username} and Price is ${anyobject.price}`);  //UserName is Ajaya and Price is 199
}
handleObject(user)
handleObject({
    username: "Akash",
    price: 299              //UserName is Akash and Price is 299
})
//****************************************** */

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));  //400
console.log(returnSecondValue( [900,300,700] ));  // 300
