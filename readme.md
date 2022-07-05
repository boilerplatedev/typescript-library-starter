# typescript-library-starter

A minimal starter repository for a publishable Typescript library. Uses tools we use and love everyday.

The focus is on making sure the developer experience is the best while building with this library.

## Features

- Git Hooks using [Husky](https://typicode.github.io/husky/) that lint and run tests before changes are pushed.
- Source Code Lint using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).
- Commit Message linting with [commitlint](https://github.com/conventional-changelog/commitlint). Setup to use the [conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) style of commit messages.
- Release with [semantic-release](https://www.npmjs.com/package/semantic-release). If you use a proper [Commit Message format](https://semantic-release.gitbook.io/semantic-release/#commit-message-format), you'll never have to manually version and publish NPM packages again.
- Test with [Jest](https://jestjs.io/).
- GitHub Action to build and release to NPM automatically.

## How to Use?

- Search `typescript-library-starter` and replace it with your custom package name.
- Search `Abhishek Bhardwaj` and replace it with your name.
- Check `.releaserc` to enable/disable the `semantic-release` plugins you may or may not want. The following plugins are initially setup:

    - [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
    - [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
    - [@semantic-release/changelog](https://github.com/semantic-release/changelog)
    - [@semantic-release/npm](https://github.com/semantic-release/npm)
    - [@semantic-release/github](https://github.com/semantic-release/github)
    - [@semantic-release/git](https://github.com/semantic-release/git)

- The GitHub action will automatically generate release notes and a changelog. It will also automatically publish to NPM and also make a TAR ball and add it to `GitHub Releases`. To use it properly, please generate the following tokens:

    - `GITHUB_TOKEN` - Generate a Personal Access Token that you can use to authenticate your own user.
      - When using the GITHUB_TOKEN, the [minimum required permissions](https://github.com/semantic-release/github#github-authentication) are:

            - `contents`: write to be able to publish a GitHub release
            - `issues`: write to be able to comment on released issues
            - `pull-requests`: write to be able to comment on released pull requests

    - `NPM_TOKEN` - [Generate an access token](https://docs.npmjs.com/creating-and-viewing-access-tokens) on NPMJS.com to automatically publish the release.

- To skip CI, add `skip-ci` to commit message.
- To skip release, add `skip-release` to commit message.
