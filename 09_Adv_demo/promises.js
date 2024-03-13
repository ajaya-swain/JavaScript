const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})
promiseOne.then(function(){         //.then have conection with resolve
    console.log("Promise Consumed");
})

//*******or******** */

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async two Resolved");
})

//**************************** */





