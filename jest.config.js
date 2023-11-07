/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^openai$': '<rootDir>/src/index.ts',
    '^openai/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^openai/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/', '<rootDir>/dist/', '<rootDir>/deno_tests/'],
};

// @ts-check is a directive for VS Code to check the correctness of the file using TypeScript
// even though this is a .js file.
// @type {import('ts-jest/dist/types')} is a TypeScript type assertion that helps with autocompletion
// and type checking for the configuration object for ts-jest.
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // This tells Jest to use ts-jest for handling TypeScript files.
  preset: 'ts-jest',

  // This sets the environment in which the tests will run. 'node' means it will simulate a Node.js environment.
  testEnvironment: 'node',

  // The moduleNameMapper is an object that tells Jest to redirect imports/require statements
  // when they match the left side pattern to the path on the right side.
  // This is useful for defining aliases or avoiding complex relative paths.
  moduleNameMapper: {
    // When any test file imports from 'openai', it'll be redirected to the file at '<rootDir>/src/index.ts'.
    '^openai$': '<rootDir>/src/index.ts',
    // When importing files that match 'openai/_shims/auto/*', the import will be mapped to the
    // corresponding file in '<rootDir>/src/_shims/auto/*-node'.
    // This seems to be redirecting to a node-specific shim file instead of a general one.
    '^openai/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    // Any other import that starts with 'openai/' will be mapped to the corresponding file under '<rootDir>/src/'.
    '^openai/(.*)$': '<rootDir>/src/$1',
  },

  // modulePathIgnorePatterns is an array of RegExp patterns. Files or directories matching
  // these patterns will be ignored by Jest, meaning that they won't be tested or transformed.
  modulePathIgnorePatterns: [
    // This tells Jest to ignore any files in the '/ecosystem-tests/' directory relative to the root directory.
    '<rootDir>/ecosystem-tests/',
    // It also tells Jest to ignore any files in the '/dist/' directory, which typically contains built files.
    '<rootDir>/dist/',
    // Lastly, it ignores any files in the '/deno_tests/' directory, possibly because they are specific to Deno,
    // which is a JavaScript/TypeScript runtime different from Node.js.
    '<rootDir>/deno_tests/',
  ],
};
