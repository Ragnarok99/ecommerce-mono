import { Request, Response } from 'express';
import mongoose from 'mongoose';

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
  console.log('Hola');
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

    if (!mongoose.Types.ObjectId.isValid(productId))
      return res.status(400).send({ message: 'id must be a string ObjectId' });

    const product = await Product.findById(productId);

    if (!product) return res.status(404).send({ message: 'Product not found' });

    return res.status(201).send(product);
  } catch (errors) {
    return res.status(500).send({ message: errors });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(productId))
      return res.status(400).send({ message: 'id must be a string ObjectId' });

    const product = await Product.findByIdAndRemove(productId);

    if (!product) return res.status(404).send({ message: 'Product not found' });

    return res.status(204).send({ message: 'Product delete successful' });
  } catch (error) {
    return res.status(404).send({ message: error });
  }
};

export { getAll, create, getById, remove };
