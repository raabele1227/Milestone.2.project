const model = require("../models/items");


exports.new = (req, res) => {
  res.render("./items/new");
};

exports.create = (req, res) => {
  let tradeItems = req.body;
  model.create(tradeItems);
  res.redirect("/trades");
};

exports.show = (req, res, next) => {
  let id = req.params.id;
  let tradeItems = model.findById(id);
  if (tradeItems) {
    res.render("./items/show", { tradeItems });
  } else {
    let err = new Error("Cannot find a items with id" + id);
    err.status = 404;
    next(err);
  }
};


exports.edit = (req, res, next) => {
  let id = req.params.id;
  let tradeItems = model.findById(id);
  if (tradeItems) {
    res.render("./items/edit", { tradeItems });
  } else {
    let err = new Error("Cannot find a items with id" + id);
    err.status = 404;
    next(err);
  }
};


exports.update = (req, res) => {
  let tradeItems = {
    id: req.params.id,
    name: req.body.name,
    roastType: req.body.roastType,
    quantity: req.body.quantity,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
  };
  let id = req.params.id;

  if (model.updateById(id, tradeItems)) {
    res.redirect("/trades/" + id);
  } else {
    let err = new Error("Cannot find a items with id" + id);
    err.status = 404;
    next(err);
  }
};


exports.list = (req, res) => {
  let tradeItems = model.find();
  let roasts = [...new Set(tradeItems.map((tradeItem) => tradeItem.roastType))];
  res.render("./items/trades", { tradeItems, roastType: roasts });
};

exports.filter = (req, res) => {
  let roastType = req.params.roastType;
  let tradeItems = model.findByRoastType(roastType);
  let roasts = [...new Set(tradeItems.map((tradeItem) => tradeItem.roastType))];
  res.render("./items/trades", { tradeItems, roastType: roasts });
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  if (model.deleteById(id)) {
    res.redirect("/trades");
  } else {
    let err = new Error("Cannot find a items with id" + id);
    err.status = 404;
    next(err);
  }
};