var itemList = [
  {
    name: 'ChiTown Original',
    toppings: ['cheese', 'sausage', 'pepperoni'],
    crust: 'deepdish',
    cityOfOrigin: 'Chicago, Illinois',
    cost: 20
  },
  {
    name: 'Hawaiian',
    toppings: ['cheese', 'pineapple', 'canadian bacon'],
    crust: 'handtossed',
    cityOfOrigin: 'Chatham, Ontario',
    cost: 15
  }
];

function getMyPizza(myFavorite, money) {

  var foundItems = itemList.filter((item) => {
    return item.name === myFavorite;
  });
  var foundItem = foundItems[0];

  if (canPurchase(foundItem, money)) {
    return foundItem;
  }
  return null;
}

function canPurchase(pizza, money) {
  return pizza.cost <= money;
}

var myPizza = getMyPizza('ChiTown Original', 20);

console.log(`
************************************

    You order a ${myPizza.name}

************************************
`);
