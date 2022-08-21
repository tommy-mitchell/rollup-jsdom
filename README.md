# Reproduction of Error with `@rollup/plugin-commonjs` and `jsdom`

This repository is a slightly expanded reproduction of the error mentioned in [this issue](https://github.com/rollup/plugins/issues/1247). See [REPL.it](https://replit.com/@tommy-mitchell/rollup-plugin-repro-commonjs?v=1).

When attempting to bundle `jsdom` using `@rollup/plugin-commonjs`, the plugin attempts to read `jsdom/package.json` and the following error occurs:

```text
[!] (plugin commonjs--resolver) Error: Unexpected token (Note that you need @rollup/plugin-json to import JSON files)
node_modules/jsdom/package.json (2:8)
1: {
2:   "name": "jsdom",
           ^
3:   "version": "20.0.0",
4:   "description": "A JavaScript implementation of many web standards",
Error: Unexpected token (Note that you need @rollup/plugin-json to import JSON files)
    at error (~\node_modules\rollup\dist\shared\rollup.js:198:30)
    at Module.error (~\node_modules\rollup\dist\shared\rollup.js:12560:16)
    at Module.tryParse (~\node_modules\rollup\dist\shared\rollup.js:12937:25)
    at Module.setSource (~\node_modules\rollup\dist\shared\rollup.js:12842:24)
    at ModuleLoader.addModuleSource (~\node_modules\rollup\dist\shared\rollup.js:22284:20)
```

## Running

To reproduce:

`git clone https://github.com/tommy-mitchell/rollup-jsdom.git && cd rollup-jsdom`

`npm install && npm run rollup`

A control compilation where `jsdom` is not bundled is outputed to `dist/control.mjs`. Rollup then attempts to bundle `jsdom` into `dist/common.mjs`, but fails with the above error.
