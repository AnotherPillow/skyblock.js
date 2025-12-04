import { defineConfig } from 'tsdown'
import pkg from "./package.json" assert { type: "json" };

export default defineConfig({
    entry: ['./src/index.ts'],
    dts: true,
    format: "cjs",
    define: {
        "process.env.PACKAGE_VERSION": JSON.stringify(pkg.version),
    },
})