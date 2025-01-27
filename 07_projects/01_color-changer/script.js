const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// let text;
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    switch ((body.style.backgroundColor = e.target.id)) {
      case 1:
        e.target.id === "grey";
        // e.target.class = black;
        break;
      case 2:
        e.target.id === "white";
        // e.target.class = black;
        break;
      case 3:
        e.target.id === "blue";
        // e.target.class = white;
        break;
      case 4:
        e.target.id === "yellow";
        // e.target.class = black;
        break;
      case 5:
        e.target.id === "purple";
        // e.target.class = white;
        break;
    }
  });
});
