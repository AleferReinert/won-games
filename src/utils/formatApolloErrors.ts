import { ApolloError } from '@apollo/client'
import { GraphQLFormattedError } from 'graphql'

export function formatApolloErrors(error: ApolloError) {
  const errors = error.graphQLErrors.reduce((acc: Record<string, string>, gqlError: GraphQLFormattedError) => {
    const extensions = gqlError.extensions as {
      error?: { details?: { errors: Array<{ path: string[]; message: string }> } }
    }

    if (extensions?.error?.details?.errors) {
      extensions.error.details.errors.forEach((err) => {
        if (err?.path?.[0] && err?.message) {
          acc[err.path[0]] = err.message
        }
      })
      // @ts-expect-error ApolloError type does not have a message property
    } else if (extensions?.error?.message) {
      // @ts-expect-error ApolloError type does not have a message property
      acc.general = extensions.error.message
    } else if (gqlError.message) {
      acc.general = gqlError.message
    }

    return acc
  }, {})

  return errors
}
