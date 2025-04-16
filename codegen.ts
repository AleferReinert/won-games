import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  documents: 'src/graphql/**/*.ts',
  generates: {
    'src/types/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        avoidOptionals: true,
        maybeValue: 'T',
        withHooks: false,
        withHOC: false,
        withComponent: false
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
