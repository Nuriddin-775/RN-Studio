module.exports = {
  // Core formatting
  bracketSpacing: false,
  bracketSameLine: false,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "avoid",
  useTabs: false,
  printWidth: 120,
  tabWidth: 2,
  semi: false,

  // Import sorting (Prettier 3 compatible)
  importOrderSeparation: true,
  importOrder: [
    "^(jest|@tst/(.*))$",
    "^(react)$",
    "^app$",
    "^pages/(.*)$",
    "^store$",
    "^components/(.*)$",
    "^hooks/(.*)$",
    "^constants/(.*)$",
    "^store/(.*)$",
    "^features/(.*)$",
    "^utils/(.*)$",
    "^typings/(.*)$",
    "^(.*).(svg|png)",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx"],
  importOrderSortSpecifiers: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}
