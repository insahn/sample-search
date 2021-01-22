/* eslint-disable import/no-anonymous-default-export */
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true, exports: "default" },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    external(),
    terser(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
