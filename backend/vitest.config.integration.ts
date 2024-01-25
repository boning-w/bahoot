import { defineConfig } from "vitest/config";
// Failed to load url resolved bug #3042: https://github.com/vitest-dev/vitest/discussions/3042
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ["src/tests/integration/**/*.test.ts"],
    poolOptions: {
      threads: {
        // Run all tests with the same environment inside a single worker thread.
        singleThread: true,
      },
    },
    setupFiles: ["src/tests/integration/helpers/setup.ts"],
    coverage: {
      reporter: ["html"],
    },
  },
});
