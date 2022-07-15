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

export const loginSchema = Joi.object({
  firstName: fields.firstname,
});
