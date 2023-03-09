const express = require("express");
const controller = require("../controllers/tradeController");

const router = express.Router();

module.exports = router;

router.get("/", controller.index);

router.get("/new", controller.new);

router.get("/:id/edit", controller.edit);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);
