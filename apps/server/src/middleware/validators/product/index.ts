import { NextFunction, Request, Response } from 'express';

import { validateProduct } from '../../../validations';

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = await validateProduct.validateAsync(req.body);
    req.body = validated;
    return next();
  } catch (error: any) {
    return res.status(400).send({ message: error.message });
  }
};

export const abc4 = () => {};
