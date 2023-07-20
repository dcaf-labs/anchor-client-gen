## How to publish a new release

Latest:

- Change `@coral-xyz/anchor` and `@coral-xyz/anchor-cli` versions in `package.json` to official npm packages and match the release version
- Change the `anchor-lang` dependency version in `tests/example-program/programs/example-program/Cargo.toml` to match the release version
- Bump the version outputted by `--version` flag in `src/main.ts`.
- Run `yarn build` and `yarn test`
- Update CHANGELOG.md with the new version
- Publish the latest version `yarn npm publish`
- Tag the beta with the new version `npm dist-tag add @dcaf/anchor-client-gen@vX.Y.Z beta`
- Commit the changes to git
- Tag the commit on master after merging with `git tag <version> && git push origin <version>`

Beta:

- Update the version outputted by `--version` flag in `src/main.ts` to match the above
- Run `yarn build` and `yarn test`
- Publish the beta version `yarn npm publish --tag beta` (optionally do a dry run with `--dry-run`)
- Commit the changes to git
- Tag the commit on master after merging with `git tag <version> && git push origin <version>`
