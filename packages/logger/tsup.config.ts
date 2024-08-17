import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  clean: true,
  dts: true,
  entryPoints: ['src/index.ts'],
  format: ['cjs'],
  ...options,
}));
