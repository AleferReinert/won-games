import Joi from 'joi'
import { formatValidationErrors } from 'utils/formatValidationErrors'

export interface ForgotPasswordValidationProps {
  email: string
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
    })
})

export function forgotPasswordValidation({ email }: ForgotPasswordValidationProps) {
  const { error } = schema.validate({ email }, { abortEarly: false })

  if (error) {
    return formatValidationErrors(error)
  }

  return {}
}
