const express = require("express");
const Product = require("../Modal/Product");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, imageUrl, description, price, quantity } = req.body;
  const newProduct = new Product({
    name,
    imageUrl,
    description,
    price,
    quantity,
  });
  try {
    var savedProduct = await newProduct.save();
    console.log(newProduct);
    res.json({
      message: "This is product / route",
      product: savedProduct,
    });
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description:req.body.description,
        price:req.body.price,
        quantity:req.body.quantity
    });
    // Send response in here
    res.send('Item Updated!');

  } catch(err) {
      console.error(err);
     
  }
});

// router.put("/product/:id",async(req,res)=>{
//   console.log(req.params.id)
//   const products = await Product.find(req.params.id);
//   console.log(products)
//   const { name, imageUrl, description, price, quantity } = products;
//     const updateProduct = new Product({
//     name:req.body.name,
//     imageUrl:req.body.imageUrl,
//     description:req.body.description,
//     price:req.body.price,
//     quantity:req.body.quantity,
//   });

//   try {
//     var savedProduct = await updateProduct.save();
//     console.log(updateProduct);
//     res.json({
//       message: "This is product / route",
//       product: savedProduct,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

router.delete('/:id', async (req, res) => {
  try {
       await Product.findByIdAndDelete(req.params.id);
      res.json(' Item deleted.');

      } catch(err) {
        console.log(err)
   }
});





module.exports = router;
