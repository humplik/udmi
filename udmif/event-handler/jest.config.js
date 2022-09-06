module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/src/__tests__/"],
  coverageReporters: [
    "text",
    "cobertura",
    "lcov"
  ],
  preset: "@shelf/jest-mongodb",
  // testEnvironment: "node",
  testRegex: '(/__tests__/spec.ts|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchPathIgnorePatterns: ['globalConfig'],
}
