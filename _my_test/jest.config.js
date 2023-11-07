// jest.config.mjs
export default {
    transform: {},
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'ts', 'json', 'node'],
    // Optional: Use babel-jest to transpile tests with the next babel preset
    // This is necessary if you are using import/export in your test files
    transform: {
      '^.+\\.(t|j)sx?$': ['babel-jest', { presets: ['@babel/preset-env'] }],
    },
    // If you are using `import.meta.url` within your tests, you might need to mock it
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

  };
  