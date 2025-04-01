import Joi from 'joi'
import { formatValidationErrors } from 'utils/formatValidationErrors'

interface SignInValidationProps {
  email: string
  password: string
}

const schema = Joi.object({
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
  })
})

export function signInValidation({ email, password }: SignInValidationProps) {
  const { error } = schema.validate({ email, password }, { abortEarly: false })

  if (error) {
    return formatValidationErrors(error)
  }

  return {}
}
