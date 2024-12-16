# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.1.0](https://github.com/Asteroid77/zw-energy-admin-frontend/compare/v0.0.3...v0.1.0) (2024-12-16)


### ⚠ BREAKING CHANGES

* - The `usePlugin` function has been modified to only accept a parameter named `app`, and no longer requires the `data` parameter.
- Remove explicit plugin declarations from `main.ts`

### Features

* add `LayoutView.vue` and components named `NewsBar.tsx` and `LoadingBar.tsx`, along with their type declarations, hooks, and CSS files. ([93fb783](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/93fb7839feaf9292e9955d7a069fcfc9db3c41ec))
* Add CSS and PrimeVue theme support ([efcba4c](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/efcba4c773fc74d22d6ecc09928bfca976d2208f))
* Add NewBarVIew and its related css, declaration, store. ([f744ce0](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/f744ce0c0592cdd411f74fe42824d718a1a94f01))
* consolidate plugin loading into the `_initiation` function inside `usePlugins.ts`, add `callback` parameter to `ToBeInstalledPlugin` type to support plugins that need to execute a callback after loading. ([e430cb8](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/e430cb88e6e4f067502bba41dbdceb908332460f))
* **tailwind css:** add postcss.config.cjs, and dependencies `autoprefixer` and `clsx` to use Tailwind CSS ([9e1e26d](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/9e1e26d81f844ea3b544621d3b3d928933476da3))
* use scss with the best performance by setting `css.preprocessorOptions.scss.api` to `modern-compiler` ([e259cc1](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/e259cc1a5a9726074a55c4a47350ad069ff4ab7e))


### Bug Fixes

* add missing `callback` parameter to `ToBeInstalledPlugin` type in the previous commit. ([9340197](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/93401977bf52b7370d3d8c8b183fe24fbd34020b))

### [0.0.3](https://github.com/Asteroid77/zw-energy-admin-frontend/compare/v0.0.2...v0.0.3) (2024-12-06)


### Features

* **api:** add normal captcha(for login) api and sending phone sms api(for something to verify user identity ([3ce7988](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/3ce798809ec3c4577cffff682498b4bc4e941550))
* **router:** export the router instance through the `useRouter` function in the `useRouter.ts` file ([3433a55](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/3433a55b91b5cbfbab6629c0712b975e26cd8ae4))

### [0.0.2](https://github.com/Asteroid77/zw-energy-admin-frontend/compare/v0.0.0...v0.0.2) (2024-12-05)


### Features

* **dexie:** add Dexie to manage IndexedDB and create a table named 'exceptions' to record unexpected exceptions. ([1012156](https://github.com/Asteroid77/zw-energy-admin-frontend/commit/1012156003938a035ee99327396684f1a53f7da4))

### [0.0.1](https://github.com/Asteroid77/zw-energy-admin-frontend/compare/v0.0.0...v0.0.1) (2024-11-29)
