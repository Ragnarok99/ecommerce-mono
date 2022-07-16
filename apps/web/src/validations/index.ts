import * as Yup from 'yup'

const fields = {
    email: Yup.string().email().required(),
    password: Yup.string().required(),
}

export const loginSchema = Yup.object().shape({
    email: fields.email,
    password: fields.password
})

export const signupSchema = {}