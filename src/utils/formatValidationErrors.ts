import Joi from 'joi'

export function formatValidationErrors(error: Joi.ValidationError) {
  const errors = error.details.reduce(
    (acc, curr) => {
      acc[curr.path[0]] = curr.message
      return acc
    },
    {} as Record<string, string>
  )
  return errors
}
