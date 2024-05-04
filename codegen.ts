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
    },
    './src/graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts', 
        baseTypesPath: 'types.ts',
        folder: '../generated',
    },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: { 
        withHooks: true
    }
    }
  },
  ignoreNoDocuments: true,
}

export default config