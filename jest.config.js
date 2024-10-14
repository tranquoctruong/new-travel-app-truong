module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };  