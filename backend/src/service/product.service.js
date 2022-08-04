const Product = require("../Modal/Product");

exports.getQuantity = async (productId) => {
  const product = await Product.findById(productId).select(quantity);
  console.log(product);
  return product.quantity ;
};

exports.updateQuantity = async (productId, quantity) => {
  const product = await Product.findById(productId).select("quantity");
  product.quantity = product.quantity - quantity;
  await product.save();
};


//kata use vako cha yo ordaer product
exports.orderProduct = async (productId, quantity) => {
    const product = await Product.findById(productId).select("quantity");
    product.quantity = product.quantity - quantity;
  };
