const config = {
  //   collectCoverage: true,
  //   collectCoverageFrom: [
  //     'src/**/*.ts(x)?',
  //     '!src/**/*.stories.tsx',
  //     '!src/pages/**/*.tsx',
  //     '!src/styles/**/*.styles.ts'
  //   ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  modulePathIgnorePatterns: ['<rootDir>/coverage/'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
  transform: { '\\.[jt]sx?$': ['babel-jest', { presets: ['next/babel'] }] }
}

module.exports = config
