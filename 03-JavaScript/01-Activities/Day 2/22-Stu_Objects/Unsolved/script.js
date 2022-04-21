//WRITE YOUR CODE BELOW

var DrinksOrder = {
  DrinkName: "Mocha",
  Sugars: 1,
  Ready: true,
};

console.log(DrinksOrder.DrinkName, DrinksOrder.Sugars);

if (DrinksOrder.Ready) {
  console.log("Ready");
} else {
  console.log("Still in the queue");
}
