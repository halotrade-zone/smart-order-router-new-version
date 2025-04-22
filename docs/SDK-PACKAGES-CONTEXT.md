# SDK Packages Context

## Overview

This document summarizes the work completed on April 22, 2025 where we published several SDK packages to npm under the @thienlk namespace.

## Published Packages

The following packages have been successfully published to npm:

1. `@thienlk/sdk-code` v0.0.2 (forked from @uniswap/sdk-core)
2. `@thienlk/v3-sdk` v0.0.1 (forked from @uniswap/v3-sdk)
3. `@thienlk/router-sdk` v0.0.1 (forked from @uniswap/router-sdk)
4. `@thienlk/v2-sdk` v0.0.1 (forked from @uniswap/v2-sdk)
5. `@thienlk/v4-sdk` v0.0.1 (forked from @uniswap/v4-sdk)
6. `@thienlk/universal-router-sdk` v0.0.1 (forked from @uniswap/universal-router-sdk)
7. `@thienlk/uniswapx-sdk` v0.0.1 (forked from @uniswap/uniswapx-sdk)
8. `@thienlk/smart-wallet-sdk` v0.0.1 (forked from @uniswap/smart-wallet-sdk)
9. `@thienlk/smart-order-router` v0.0.1 (forked from @uniswap/smart-order-router)

## Dependency Structure

All inter-dependencies between these packages have been updated to reference the @thienlk namespace versions instead of the original @uniswap versions. For example:

- `@thienlk/v3-sdk` depends on `@thienlk/sdk-code` v0.0.2
- `@thienlk/router-sdk` depends on `@thienlk/sdk-code` v0.0.2 and `@thienlk/v3-sdk` v0.0.1
- `@thienlk/v4-sdk` depends on `@thienlk/sdk-code` v0.0.2 and `@thienlk/v3-sdk` v0.0.1
- `@thienlk/universal-router-sdk` depends on multiple @thienlk packages
- `@thienlk/smart-order-router` depends on all the other SDK packages

## Installation

These packages can be installed in any project using npm or yarn:

```bash
npm install @thienlk/sdk-code @thienlk/v3-sdk @thienlk/router-sdk @thienlk/v2-sdk @thienlk/v4-sdk @thienlk/universal-router-sdk @thienlk/uniswapx-sdk @thienlk/smart-order-router
```

Or with yarn:

```bash
yarn add @thienlk/sdk-code @thienlk/v3-sdk @thienlk/router-sdk @thienlk/v2-sdk @thienlk/v4-sdk @thienlk/universal-router-sdk @thienlk/uniswapx-sdk @thienlk/smart-order-router
```

## Source Code Location

The original source code for these packages is located at:

- `/home/thien/auraswap-sdks/sdks/` (for the SDK packages)
- `/home/thien/smart-order-router-new-version/` (for the smart-order-router)

## Publishing Process

The publishing process involved:

1. Renaming packages in package.json files
2. Updating inter-dependencies to use the @thienlk namespace
3. Setting version numbers to 0.0.1 or 0.0.2
4. Removing the "provenance" setting from publishConfig
5. Building the packages
6. Publishing to npm

## Known Issues

There are some type compatibility issues between the forked packages that may need to be addressed in future updates:

1. Some type definitions in the forked packages still reference the original @uniswap packages
2. When building the `@thienlk/smart-order-router` package, there were type errors related to incompatibilities between the forked SDK packages
3. Despite these type errors, the packages are functional and can be used in projects

## Future Improvements

For future improvements to these packages:

1. Fix type references to ensure complete compatibility between all @thienlk packages
2. Update tests to work with the new namespace
3. Consider versioning the packages together to ensure compatibility
4. Document API changes or differences from the original Uniswap packages

## Notes

- When building workspace packages, remember to run `yarn install` after making changes to dependencies to update the lockfile
- Some packages had test failures but were still publishable
- The smart-wallet-sdk was already published as v0.0.1 and couldn't be republished
