import { defineConfig } from 'vite';

export default defineConfig({
  // Use a relative asset base so static builds also work from GitHub Pages subpaths.
  // For a fixed repository page, this can be changed to '/<repository-name>/'.
  base: './',
});
