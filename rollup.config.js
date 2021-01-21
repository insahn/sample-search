/* eslint-disable import/no-anonymous-default-export */
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    url(),
    external(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    del({ targets: ["dist/*"] }),
    resolve(),
    commonjs(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
