import * as Yup from 'yup';

const fields = {
  username: Yup.string().required(),
  password: Yup.string().required(),
};

export const loginSchema = Yup.object().shape({
  username: fields.username,
  password: fields.password,
});

export const signupSchema = {};
