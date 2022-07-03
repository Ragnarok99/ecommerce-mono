import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import User from '../models/User';

const { SALT_NUMBER = 20 } = process.env;

const signup = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const salt = await bcrypt.genSalt(Number(SALT_NUMBER));
    const encryptedPassword = await bcrypt.hash(body.password, salt);
    const user = new User({
      ...body,
      password: encryptedPassword,
      salt,
      updated_at: new Date(),
      created_at: new Date(),
    });

    await user.save();

    res.status(201).send(user.toJSON());
  } catch (errors) {
    res.status(500).send({ message: errors });
  }
};

// eslint-disable-next-line import/prefer-default-export
export { signup };
