//Do an async task
//DB calls, cryptography, network

// const promiseFour = new Promise(function (resolve, reject) { });
//promiseFour.then().catch()    //.then have conection with resolve   //.catch() have connection with reject


/* const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {    //.then have conection with resolve
  console.log("Promise Consumed");
}); */

//*****or***** */

/* new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two Resolved");
}); */

//**************************** */

/* const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Aju", email: "ajayaswain.in@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
}); */

//************************************** */
/* const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Ajaya", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));      //.finally() will always execute
   */

  //****************using async/await*********************** */
  //***********not .then() .catch() *************/
  /* const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive   //promise is an object so using variable
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive() */

//*************** */
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all