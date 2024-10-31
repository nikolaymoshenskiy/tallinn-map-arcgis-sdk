import { defineConfig } from 'vite';

export default defineConfig({
  base: '/tallinn-map-arcgis-sdk/',  
  resolve: {
    alias: {
      '@arcgis/core': '@arcgis/core', 
    },
  },
});