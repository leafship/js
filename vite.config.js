import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  server: { port: 3000 },
  publicDir: path.resolve(__dirname, '../pic'),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '..'),
    },
  },
});