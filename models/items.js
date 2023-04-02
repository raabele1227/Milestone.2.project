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
  if (tradeItems) {
    tradeItems.roastType = newTradeItem.roastType
    tradeItems.coffeeName= newTradeItem.coffeeName;
    return true;
  } else {
    return false;
  }
};

exports.deleteById = function (id) {
  let index = tradeItems.findIndex((tradeItem) => tradeItem.id === id);
  if (tradeItems) {
    tradeItems.roastType = newTradeItem.roastType
    tradeItems.coffeeName= newTradeItem.coffeeName;
    return true;
  } else {
    return false;
  }
};




