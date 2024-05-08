import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: 'src/graphql/**/!(*.generated).{ts,tsx}',
  generates: {
    'src/graphql/types.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
        maybeValue: 'T'
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
