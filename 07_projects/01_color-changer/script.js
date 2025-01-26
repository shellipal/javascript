const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch ((body.style.backgroundColor = e.target.id)) {
      case 1:
        e.target.id === "grey";
        break;
      case 2:
        e.target.id === "white";
        break;
      case 3:
        e.target.id === "blue";
        break;
      case 4:
        e.target.id === "yellow";
        break;
      case 5:
        e.target.id === "purple";
        break;
    }
  });
});
