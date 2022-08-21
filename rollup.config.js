import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

// control test case
const control = {
    input: "src/index.js",
    output: {
        file: 'dist/control.mjs',
        format: 'es',
    },
};

// try to import -> fails from trying to read jsdom/package.json
const common = {
    input: "src/index.js",
    output: {
        file: 'dist/common.mjs',
        format: 'es',
    },
    plugins: [
        commonjs(),
        resolve(),
    ],
};

export default [ control, common ];