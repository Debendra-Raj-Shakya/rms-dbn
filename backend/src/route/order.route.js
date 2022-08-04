const {
  addOrder,
  getOrder,
  checkOut,
} = require("../controller/order.controller");

const router = require("express").Router();

router.post("/:seatId", addOrder);

router.get("/:seatId", getOrder);
router.patch("/:seatId", checkOut);

module.exports = router;
