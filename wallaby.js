module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*.spec.ts',
      'e2e/**/*.ts',
      '!e2e/**/*.e2e-spec.ts',
    ],
    filesWithNoCoverageCalculated: [
      'e2e/**/*.ts',
    ],
    tests: [
      'src/**/*.spec.ts',
      'e2e/**/*.e2e-spec.ts',
    ],
    env: {
      type: 'node',
    },
    testFramework: 'jasmine',
  };
};
