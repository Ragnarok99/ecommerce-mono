import { Request, Response } from 'express';
import User from '../models/User';

const signup = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const user = new User({
      ...body,
      updated_at: new Date(),
      created_at: new Date(),
    });

    await user.save();

    res.status(201).send(user);
  } catch (errors) {
    res.status(500).send({ message: errors });
  }
};

// eslint-disable-next-line import/prefer-default-export
export { signup };
