import Joi from 'joi'
import { formatValidationErrors } from 'utils/formatValidationErrors'

export interface SignUpValidationProps {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const schema = Joi.object({
  username: Joi.string().min(5).required().messages({
    'string.min': 'Full name must be at least 5 characters',
    'any.required': 'Full name is required',
    'any.empty': 'Full name is required',
    'string.empty': 'Full name is required'
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Invalid e-mail',
      'any.required': 'E-mail is required',
      'any.empty': 'E-mail is required',
      'string.empty': 'E-mail is required'
    }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 6 characters',
    'any.empty': 'Password is required',
    'string.empty': 'Password is required'
  }),
  confirmPassword: Joi.valid(Joi.ref('password')).messages({
    'any.only': 'Passwords do not match'
  })
})

export function signUpValidation({ username, email, password, confirmPassword }: SignUpValidationProps) {
  const { error } = schema.validate({ username, email, password, confirmPassword }, { abortEarly: false })

  if (error) {
    return formatValidationErrors(error)
  }

  return {}
}
