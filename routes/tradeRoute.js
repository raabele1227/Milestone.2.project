const express = require("express");
var router = module.exports = express.Router();
const controller = require("../controllers/tradeController");

// router.get("/", controller.index);
// router.get("/new", controller.new);
// router.get("/:id/edit", controller.edit);
// router.put("/:id", controller.update);
// router.delete("/:id", controller.delete);
// router.post("/", controller.create);
// router.get("/:id", controller.show);





module.exports = router;

// router.get ("/", controller.index) {
//     res.render("index");


// 	Trade.find({}, (err, result) => {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		console.log(result);
// 		res.render("index", {trades: result});
// 	});
// };


// router.get("/new", controller.new) {
//     res.render("newTrade");
// };


// router.get("/:id/edit", controller.edit) {
//     res.render("editTrade");
// }


// router.put("/:id", controller.update) {
//     res.render("updateTrade");
// }


// router.delete("/:id", controller.delete) {
//     res.render("deleteTrade");
// }

// router.post("/", controller.create) {
//     res.render("createTrade");
// }

// router.get("/:id", controller.show) {
//     res.render("showTrade");
// }   


