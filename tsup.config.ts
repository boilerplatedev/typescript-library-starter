import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    treeshake: true,
    minify: !options.watch,
    clean: true,
    format: ["esm", "cjs"],
    sourcemap: true,
    dts: true,
    entry: [
        './src/*.ts'
    ],
    tsconfig: "tsconfig.build.json"
}))
