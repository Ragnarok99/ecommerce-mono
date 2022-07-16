import Joi from '@hapi/joi';

const fieldsColor = {
  name: Joi.string().alphanum().min(4).max(30).required(),
  hexcode: Joi.string().alphanum().min(4).max(11).required(),
};

export const validateColor = Joi.object({
  name: fieldsColor.name,
  hexcode: fieldsColor.hexcode,
});

// eslint-disable-next-line spaced-comment
//Erase after add a new validation
export const loginSchema = Joi.object({});
