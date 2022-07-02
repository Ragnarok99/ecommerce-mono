import { Request, Response } from 'express';

import Product from '../models/Product';

const getAll = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
    });

    await product.save();

    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) return res.status(404).send({ message: 'Product not found' });

    return res.status(201).send(product);
  } catch (errors) {
    return res.status(500).send({ message: errors });
  }
};

export { getAll, create, getById };
