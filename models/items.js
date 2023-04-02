const tradeItems = [
  {
    id: "1",
    roastType: "Light",
    coffeeName: "Cinnamon",
  },
  {
    id: "2",
    roastType: "Light",
    coffeeName: "New England",
  },
  {
    id: "3",
    roastType: "Light",
    coffeeName: "Half City",
  },
  {
    id: "4",
    roastType: "Medium",
    coffeeName: "American",
  },
  {
    id: "5",
    roastType: "Medium",
    coffeeName: "City",
  },
  {
    id: "6",
    roastType: "Medium",
    coffeeName: "Breakfast",
  },
  {
    id: "7",
    roastType: "Dark",
    coffeeName: "French",
  },
  {
    id: "8",
    roastType: "Dark",
    coffeeName: "Italian",
  },
  {
    id: "9",
    roastType: "Dark",
    coffeeName: "Spanish",
  },
];


exports.find = () => tradeItems;

exports.findById = (id) => tradeItems.find((tradeItem) => tradeItem.id === id);

exports.updateById = function (id, newTradeItem) {
  let = tradeItems.find((tradeItem) => tradeItem.id === id);
  if (tradeItem) {
    tradeItem.coffeeName = newTradeItem.coffeeName;
    tradeItem.roastType = newTradeItem.roastType;
>>>>>>> e2ae6ddb4ceb2bb03ad726e1839263b3e0f6aea6:public/javascript/items.js
    return true;
  } else {
    return false;
  }
};

exports.deleteById = (id) => {
  let index = tradeItems.findIndex((tradeItem) => tradeItem.id === id);
<<<<<<< HEAD:models/items.js
  if (tradeItems) {
    tradeItems.roastType = newTradeItem.roastType
    tradeItems.coffeeName= newTradeItem.coffeeName;
=======
  if (index !== -1) {
    tradeItems.splice(index, 1);
    console.log("deleted");
>>>>>>> e2ae6ddb4ceb2bb03ad726e1839263b3e0f6aea6:public/javascript/items.js
    return true;
  } else {
    return false;
  }
};
