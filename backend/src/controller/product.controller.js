const Product = require("../Modal/Product");

exports.add = async (req, res) => {
  const { name, imageUrl, description, price, quantity } = req.body;

  const newProduct = new Product({
    name,
    imageUrl,
    description,
    price,
    quantity,
  });
  try {
    let savedProduct = await newProduct.save();
    res.json({
      message: "this is product/ route",
      product: savedProduct,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  await Product.deleteOne({ _id: id });
  res.json({
    message: "succesfully deleted",
  });
};
exports.getOne = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id).select("description name");
  res.json(product);
};

exports.get = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.edit = async (req, res, next) => {
  const { id } = req.params;
  const { name, imageUrl, description, price, quantity } = req.body;
  await Product.findByIdAndUpdate(id, {
    name,
    imageUrl,
    description,
    price,
    quantity,
  });
  const product = await Product.findById(id);
  res.json(product);
};
