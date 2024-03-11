//generate a random number

// console.log(parseInt(Math.random()*10));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*16));

//generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; //+= keeps adding the value
  }
  return color;
};
console.log(randomColor()); //gives a random hex code every time

//************************ */
// const startBtn = function () {
//   function changeBgColor() {
//     document.body.style.backgroundColor = randomColor();
//   }
//   setInterval(changeBgColor, 1000);
// };

//******or***** */
//***********Double clicking on start btn the bellow code corrupts********* */
// let intervalId;

// const startBtn = function () {
//   const changeBgColor = function () {
//     document.body.style.backgroundColor = randomColor();
//   };
//   intervalId = setInterval(changeBgColor, 1000);
// };

// const stopBtn = function () {
//   clearInterval(intervalId);
// };

// document.querySelector("#start").addEventListener("click", startBtn);

// document.querySelector("#stop").addEventListener("click", stopBtn);

//*********************better code (memory efficient)********* */
//*********works fine with Double clicking on start btn also*******
let intervalId;

const startBtn = function () {
  const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor();
  };

  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopBtn = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startBtn);

document.querySelector("#stop").addEventListener("click", stopBtn);
