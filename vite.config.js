import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Render用に dist を出力先に指定
  },
  server: {
    historyApiFallback: true // React Router 使用時の設定
  }
}); 