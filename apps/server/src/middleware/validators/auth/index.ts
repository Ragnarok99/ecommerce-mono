import { NextFunction, Request, Response } from 'express';

import { signupSchema } from '../../../Validations/User/Auth';

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = await signupSchema.validateAsync(req.body);
    req.body = validated;
    return next();
  } catch (errors: any) {
    // if (errors.isJoi) {
    // TODO: handle this better
    return res.status(400).send({ message: errors.message });
    // }
  }
};
export const login = () => {};
