# Arco Design Pro React v2.0

## v2.7.3

`2023-04-26`

### 🐛 Bugfix

- Use 'admin' instead.

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

## v2.6.0

2022-05-24

### 🐛 bugfix

- Fixed `useEffect` being executed twice in certain scenarios

### 🆕 What's New

- `route` adds `ignore` parameter to create routes with hidden menu items

## v2.6.1

2022-07-06

### 🐛 bugfix

- Fix the problem that styles will be introduced repeatedly under `cra` and `vite` architectures.
- Fixed UI flickering when using `PermissionWrapper` component for permission management.
- Fixed the problem that users still have permissions when `resource` in `requiredPermissions` in routing permissions uses regular matches but none of them match

## v2.7.0

2022-08-10

### 🐛 bugfix

- Fixed a bug where clicking the browser back button could not return to the previous page after routing changes

### 🆕 What's New

- Simple template code update, function synchronization.

## v2.8.0

2023-01-13

- Fix the bug that the style under the `simple-next` template is not introduced
