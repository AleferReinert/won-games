import Joi from 'joi'
import { formatValidationErrors } from 'utils/formatValidationErrors'

export interface ResetPasswordValidationProps {
  password: string
  passwordConfirmation: string
}

const schema = Joi.object({
  password: Joi.string().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 6 characters',
    'any.empty': 'Password is required',
    'string.empty': 'Password is required'
  }),
  passwordConfirmation: Joi.valid(Joi.ref('password')).messages({
    'any.only': 'Passwords do not match'
  })
})

export function resetPasswordValidation({ password, passwordConfirmation }: ResetPasswordValidationProps) {
  const { error } = schema.validate({ password, passwordConfirmation }, { abortEarly: false })

  if (error) {
    return formatValidationErrors(error)
  }

  return {}
}
