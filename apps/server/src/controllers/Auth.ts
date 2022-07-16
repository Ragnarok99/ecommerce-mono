import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User';

const { SALT_NUMBER, TOKEN_SECRET } = process.env;

const signup = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const salt = await bcrypt.genSalt(Number(SALT_NUMBER));
    const encryptedPassword = await bcrypt.hash(body.password, salt);

    const user = new User({
      ...body,
      password: encryptedPassword,
      updated_at: new Date(),
      created_at: new Date(),
    });

    await user.save();

    return res.status(201).send(user.toJSON());
  } catch (errors) {
    return res.status(500).send({ message: errors });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const userByUsername = await User.findOne({ username });

    if (!userByUsername)
      return res.status(400).send({ message: 'Wrong username or password' });

    const isPasswordValid = await bcrypt.compare(
      password,
      userByUsername.password,
    );

    if (!isPasswordValid)
      return res.status(400).send({ message: 'Wrong username or password' });

    const token = jwt.sign(
      {
        username,
        id: userByUsername.id,
      },
      String(TOKEN_SECRET),
    );

    return res.status(200).send({ token });
  } catch (errors) {
    return res.status(500).send({ message: errors });
  }
};

export { signup, login };
