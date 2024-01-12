import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
// Failed to load url resolved bug #3042: https://github.com/vitest-dev/vitest/discussions/3042
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
  },
});
