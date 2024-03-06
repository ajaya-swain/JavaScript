// const clock = document.getElementById('clock')
const clock = document.querySelector("#clock");
const local = document.querySelector("#local");

// setInterval(function(){},1000)  //imp syntax,1000 miliseconds = 1sec


setInterval(function () {
  let date = new Date();
//   console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString()
local.innerHTML= date

}, 1000);

