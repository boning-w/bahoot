import { defineConfig } from "vitest/config";
// Failed to load url resolved bug #3042: https://github.com/vitest-dev/vitest/discussions/3042
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      reporter: ["html"],
    },
    include: ["src/**/*.test.ts", "!src/tests/integration"],
  },
});
