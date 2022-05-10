# Arco Design Pro React v2.0

## v2.1.0

2022-01-19

### 🐛 bugfix

- Fixed a bug where `lazy load module` failed after `vite` production build.
- Fixed the bug of multiple redirects after logging in after building the product.

### 🆕 What's New

- Added `Permission Control` function.

## v2.2.0

2022-01-25

### 💅 style

- The padding of all block cards is uniformly 20px

### 💎 optimization

- Reduce global style override code with [Arco Pro theme](https://arco.design/themes/design/2207)
- Use [arco-vite-plugin](https://github.com/arco-design/arco-plugins/blob/main/packages/plugin-vite-react/README.md) to implement styles under vite architecture and add them as needed

## v2.3.0

2022-02-11

### 🆕 What's New

- Support for creating minimal `simple` templates. (**`@arco-design/arco-cli` needs to be upgraded to version `1.25.0`**)

## v2.3.1

2022-02-24

### 🐛 bugfix

- Fix the bug that `settings.themeColor` does not take effect.
- Fix the `bug` that the styles cannot be loaded on demand under the `cra` and `vite` architectures (the reason is that the full style package is manually imported)

## v2.4.0

2022-03-17

### 🐛 bugfix

- Fixed a `bug` where the `dashboard` page had an incorrect layout after the menu was collapsed
- Fixed `bug` where `stylelint` and `eslint` did not work before commit

## v2.5.0

2022-05-10

### 🐛 bugfix

- Fixed the page number jump display problem after `search-table` page search.

### 💎 enhancement

- Generate production environment commands under `vite` architecture
