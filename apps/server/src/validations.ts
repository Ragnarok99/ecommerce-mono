import Joi from '@hapi/joi';

const fields = {
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().alphanum().min(6).required(),
};

export const signupSchema = Joi.object({
  firstname: fields.firstname,
  lastname: fields.lastname,
  email: fields.email,
  username: fields.username,
  password: fields.password,
});

const fieldsColor = {
  name: Joi.string().alphanum().min(4).max(30).required(),
  hexcode: Joi.string().alphanum().min(4).max(11).required(),
};

export const validateColor = Joi.object({
  name: fieldsColor.name,
  hexcode: fieldsColor.hexcode,
});

const fieldsProduct = {
  name: Joi.string().alphanum().min(3).max(50).required(),
  price: Joi.number().required(),
  category: Joi.string().alphanum().min(3).max(20).required(),
  imageUrl: Joi.string().alphanum().min(2).max(100).required(),
};

export const validateProduct = Joi.object({
  name: fieldsProduct.name,
  price: fieldsProduct.price,
  category: fieldsProduct.category,
  imageUrl: fieldsProduct.imageUrl,
});

export const loginSchema = Joi.object({
  firstName: fields.firstname,
});
