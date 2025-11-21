const router = require("express").Router();
const controller = require("./tours.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:tourId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed);

module.exports = router;
