exports.index = (req, res) => {
  "/", controller.index;
  res.render("index");
}

export function trade(req, res) {
  "/trade", controller.trade;
  res.render("trade");
}

export function newTrade(req, res) {
  "/newTrade", controller.newTrade;
  res.render("newTrade");
}

export function trades(req, res) {
  "/trades", controller.trades;
  res.render("trades");
}
