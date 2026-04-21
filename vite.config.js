import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  server: { port: 3000 },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '..'),
    },
  },
});