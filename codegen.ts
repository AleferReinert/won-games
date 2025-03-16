import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  // documents: 'src/graphql/**/!(*.generated).{ts,tsx}',
  generates: {
    'src/types/generated.ts': {
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
