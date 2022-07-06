import { Request, Response } from 'express';

import Color from '../models/Color';

const create = async (req: Request, res: Response) => {
  try {
    const color = new Color({
      name: req.body.name,
      hexcode: req.body.hexcode,
    });
    await color.save();
    res.status(201).send(color);
  } catch (error) {
    res.status(500).send(error);
  }
};

// toDO remove after add more functions
// eslint-disable-next-line import/prefer-default-export
export { create };
