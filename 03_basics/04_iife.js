// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  //un-named IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("Shelli");
