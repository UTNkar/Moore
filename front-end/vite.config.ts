import vike from 'vike/plugin';

import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, transformWithEsbuild } from 'vite';
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks Vike's CI
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    force: true,
    include: ['react/jsx-runtime'],
  },
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      transform: (code, id) => {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          jsx: 'automatic',
          loader: 'jsx',
        });
      },
    },
    imagetools(),
    react(),
    vike(),
  ],
  resolve: {
    alias: { '#root': resolve(__dirname, 'src') },
  },
});
