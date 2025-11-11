// * get details Knowladge about reducer

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

// * "acc" means default value and nextItem means the next item of the array or object
const totalPrice = cartItems.reduce((acc, nextItem) => {
  console.log(acc, nextItem);

  return acc + nextItem.price * nextItem.quantity;
  // * here the first price will got to the totalPrice then the nextItem price will be add to the totalPrice
}, 0); // *acc(0) + nextItem.pricee(1500) = acc(1500) + nextItem.price(350) * nextItem.quantity(2) = 2200

console.log(totalPrice);

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScore = players.reduce((bestPlayer, players) => {
  console.log(bestPlayer, players);

  if (bestPlayer.score > players.score) {
    return bestPlayer;
  }
  return players;
}, players[0]);

console.log(bestScore);
