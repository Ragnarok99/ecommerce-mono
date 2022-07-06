import { Request, Response } from 'express';
import Size from '../models/Size';

const create = async (req: Request, res: Response) => {
  try {
    const size = new Size({
      name: req.body.name,
    });
    await size.save();
    res.status(201).send(size);
  } catch (error) {
    res.status(500).send(error);
  }
};

// toDo Remove this after add new functions
// eslint-disable-next-line import/prefer-default-export
export { create };
