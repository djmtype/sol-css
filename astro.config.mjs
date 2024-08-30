import { defineConfig } from 'astro/config';
import { Features } from "lightningcss"

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  vite: {
    plugins: [],
    css: {
      devSourcemap: true,
      transformer: "lightningcss",
      lightningcss: {
        // targets: browserslistToTargets(
        //   browserslist("last 2 major versions and not dead and > .25%")
        // ),
        include: Features.Nesting,
        // exclude: Features.LabColors | Features.P3Colors,
        exclude: Features.OklabColors | Features.ColorFunction
        // minify: false,
        // sourceMap: true,
      },
    },
    build: {
      cssMinify: "lightningcss",
      //  cssMinify: true,
    },
  }
});
