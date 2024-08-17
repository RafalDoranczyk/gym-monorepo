/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/common.js"],
  parser: "@typescript-eslint/parser",
  compilerOptions: {
    esModuleInterop: true,
    skipLibCheck: true,
    target: "es2022",
    allowJs: true,
    resolveJsonModule: true,
    moduleDetection: "force",
    isolatedModules: true,
    strict: true,
    noUncheckedIndexedAccess: true,
    module: "NodeNext",
  },
};