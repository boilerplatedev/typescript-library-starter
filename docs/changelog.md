# [2.0.0](https://github.com/abhishekbhardwaj/typescript-library-starter/compare/v1.0.0...v2.0.0) (2022-07-13)


### Features

* 💥 ✨ update `skip-ci` to `skip ci` and `skip-release` to `skip release` ([1bf2a1c](https://github.com/abhishekbhardwaj/typescript-library-starter/commit/1bf2a1c5e97b70192dac8042b72e54f9c1dd6629))


### BREAKING CHANGES

* Previously, the CI GitHub action looked for `skip-ci` and `skip-release` in commit
messages to skip related CI stages. The dashes have been removed and swapped out with spaces. So if
you include `skip ci` and `skip release` in your commit message, it'll skip the specific stage from
running in CI

# 1.0.0 (2022-07-13)


### Bug Fixes

* 🐛 disable husky in CI ([8946873](https://github.com/abhishekbhardwaj/typescript-library-starter/commit/89468733dcabc78e7df55139b118223ac6f26418))
* 🐛 support only *nix/bash in CI/CD for now ([ffccb84](https://github.com/abhishekbhardwaj/typescript-library-starter/commit/ffccb84db197da3036a1b3e3e7cf155da3d914d7))
* add the missing parts to GitHub workflow ([98067fa](https://github.com/abhishekbhardwaj/typescript-library-starter/commit/98067fa84c8b549446e2d2d096d1e07dab68f54f))


### Features

* ✨ add commitizen, devmoji to help developers write better commit messages ([6583a29](https://github.com/abhishekbhardwaj/typescript-library-starter/commit/6583a29e146d44561213ddd78d5fbd34745191a1))
* added commitlint ([5b3788b](https://github.com/abhishekbhardwaj/typescript-library-starter/commit/5b3788bd772d0a52dd98afabfd3abbf2a4427482))
* github workflow + semantic release setup + readme ([b499137](https://github.com/abhishekbhardwaj/typescript-library-starter/commit/b49913718cb5c471f21bab2873e448518992ed5d))
