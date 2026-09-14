import { mkdir, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import browserslist from 'browserslist';
import { bundle, browserslistToTargets, Features } from 'lightningcss';

// Resolve target browsers from browserslist query
const targets = browserslistToTargets(browserslist('baseline widely available'));

/**
 * Single-pass bundle and transpile function
 */
const buildCSS = async (inputFile, outputFile, options = {}) => {
  try {
    const result = bundle({
      filename: inputFile,
      targets,
      minify: options.minify ?? false,
      sourceMap: options.sourceMap ?? false,
      drafts: {
        customMedia: true,
      },
      // Exclude specific CSS features from being polyfilled/transformed
      exclude: Features.LightDark,
    });

    await mkdir(path.dirname(outputFile), { recursive: true });
    await writeFile(outputFile, result.code);

    if (result.map) {
      const mapFile = `${outputFile}.map`;
      await writeFile(mapFile, result.map);
      console.log(`Built: ${outputFile} (+ source map)`);
    } else {
      console.log(`Built: ${outputFile}`);
    }
  } catch (error) {
    console.error(`Failed to build ${inputFile} -> ${outputFile}:`, error);
    process.exit(1);
  }
};

// Target build tasks
const buildReset = () => buildCSS('src/base/reset.css', 'build/sol.reset.css');
const buildCore = () => buildCSS('src/core.css', 'build/sol.core.css');
const buildComplete = () => buildCSS('src/sol.css', 'build/sol.css');

const buildMinify = async () => {
  try {
    await mkdir('build/minified', { recursive: true });
    const files = await readdir('build');

    const minificationTasks = files
      .filter((file) => file.endsWith('.css'))
      .map((file) =>
        buildCSS(`build/${file}`, `build/minified/${file}`, { minify: true })
      );

    await Promise.all(minificationTasks);
  } catch (error) {
    console.error('Error during minification batch:', error);
    process.exit(1);
  }
};

// Main parallel build
const buildAll = async () => {
  // Run core build passes concurrently
  await Promise.all([buildComplete(), buildCore(), buildReset()]);
  // Minify once unminified builds complete
  await buildMinify();
};

// CLI entry router
const mode = process.argv[2] ?? 'all';

const tasks = {
  dev: buildComplete,
  reset: buildReset,
  core: buildCore,
  prod: buildAll,
  min: buildMinify,
  all: buildAll,
};

if (tasks[mode]) {
  await tasks[mode]();
} else {
  console.error(`Unknown build mode: "${mode}". Valid options: ${Object.keys(tasks).join(', ')}`);
  process.exit(1);
}