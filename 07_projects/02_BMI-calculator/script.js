const form = document.querySelector(".form");

// this usecase will give you empty value
// const Height = parseInt(document.querySelector("#Height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const Height = parseInt(document.querySelector("#Height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  const Results = document.querySelector("#results");

  let text = "";

  if (Height === " " || Height < 0 || isNaN(Height)) {
    Results.innerHTML = `Please give a valid height ${Height}`;
  } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
    Results.innerHTML = `Please give a valid Weight ${Weight}`;
  } else {
    const BMI = (Weight / ((Height * Height) / 10000)).toFixed(2);

    if (BMI < 18) {
      text = "Underweight";
      Results.style.color = "red";
    } else if (BMI > 18 && BMI < 24) {
      text = "Normal";
      Results.style.color = "green";
    } else {
      text = "overweight";
      Results.style.color = "blue";
    }

    // Show the Result
    Results.innerHTML = `<span>${BMI} (${text})</span>`;
  }
});
