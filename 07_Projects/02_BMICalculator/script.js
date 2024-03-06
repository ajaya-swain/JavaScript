const form = document.querySelector("form");

//*********this usecase will give you empty**** */
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //tofixed to two decimal value
    if (bmi < 18.6) {
      results.innerHTML = `${bmi} (Under Weight)`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `${bmi} (Normal Weight)`;
    } else {
      results.innerHTML = `${bmi} (Over Weight)`;
    }
  }
});
