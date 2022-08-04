const Order = require("../Modal/Orders");

const { getQuantity, updateQuantity } = require("../service/product.service");

exports.getOrder = async (req, res) => {
  const { seatId } = req.params;
  const order = await Order.find({
    status: false,
    seatId,
  })
    .populate({
      select: "name price",
      path: "productId",
    })
    .populate(seatId);
  return res.json(order);
};

exports.addOrder = async (req, res) => {
  const { seatId } = req.params;
  const { productId, quantity } = res.body;
  const existingQuantity = await getQuantity(productId);
  if (existingQuantity < quantity) {
    return res.status(400).json({
      message: "insufficent qunatity",
    });
  }
  await updateQuantity(productId, quantity);

  const order = new Order({
    //why new order is created while adding order

    status: false,
    quantity,
    seatId,
    productId,
  });
  await order.save();
  const newOrder = await Order.findById(order.id)
    .populate({
      select: "name price",
      path: "productId",
    })
    .populate("seatId");
  res.json(newOrder);
};

exports.checkOut = async (req, res) => {
  const { seatId } = req.params;
  const order = await Order.updateMany(
    {
      status: false,
      seatId: seatId,
    },
    {
      staus: true, //replacing update
    }
  );
  return res.json(order)
};
