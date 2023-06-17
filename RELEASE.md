## How to publish a new release

Latest:

- Change `@coral-xyz/anchor` and `@coral-xyz/anchor-cli` versions in `package.json` to official npm packages and match the release version
- Change the `anchor-lang` dependency version in `tests/example-program/programs/example-program/Cargo.toml` to match the release version
- Bump the version outputted by `--version` flag in `src/main.ts`.
- Run `yarn build` and `yarn test`
- Update CHANGELOG.md with the new version
- Publish the latest version `yarn publish`
- Tag the beta with the new version `npm dist-tag add @dcaf/anchor-client-gen@vX.Y.Z beta`
- Commit the changes to git
- Tag the commit on master after merging with `git tag <version> && git push origin <version>`

Beta:

- Update package.json to a beta version (e.g. `0.24.0-beta.1`)
- Update the version outputted by `--version` flag in `src/main.ts` to match the above
- Run `yarn build` and `yarn test`
- Publish the beta version `yarn publish --tag beta` (optionally do a dry run with `--dry-run`)
- Commit the changes to git
- Tag the commit on master after merging with `git tag <version> && git push origin <version>`
