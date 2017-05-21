module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts',
      '!src/migrations/**/*.ts',
      '!src/**/*.spec.ts'
    ],
    tests: [
      'src/**/*.spec.ts'
    ],
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({target: 'es5'})
    },
    env: {
      type: 'node'
    },
    testFramework: 'jasmine'
  };
};
