import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
productRouter.get('/slug/:slug', async (req, res) => {
  const product = await product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(400).send({ message: 'Product not found' });
  }
});

productRouter.get('/:id', async (req, res) => {
  const product = await product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(400).send({ message: 'Product not found' });
  }
});

export default productRouter;
