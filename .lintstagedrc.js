module.exports = {
  '*.{js,ts}': 'npm run format',
  '*.ts': "bash -c 'npm run typecheck'", // running this via bash https://github.com/okonet/lint-staged/issues/825#issuecomment-727185296
}
