/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  singleQuote: true,
  semi: false,
  trailingComma: "all",
  printWidth: 120,
  endOfLine: "auto",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[../]",
    "^[./]",
  ],
};

module.exports = config;
