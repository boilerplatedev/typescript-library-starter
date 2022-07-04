module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: false,
    },
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.(test|spec).(js|ts)'],
};
