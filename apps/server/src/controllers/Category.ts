import { Request, Response } from 'express';

import Category from '../models/Category';

const create = async (req: Request, res: Response) => {
  try {
    const category = new Category({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    });

    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

// toDo: remove this when we add more functions
// eslint-disable-next-line import/prefer-default-export
export { create };
