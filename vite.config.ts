import { defineConfig } from 'vite';
import { Features, browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

const targets = browserslistToTargets(browserslist('baseline widely available'));

export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets,
      drafts: { customMedia: true },
      exclude: Features.LightDark,
    },
  },
  server: {
    open: true,
  },
});