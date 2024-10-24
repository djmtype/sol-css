import { promises as fs } from 'fs';
import path from 'path';
import browserslist from 'browserslist';
import { bundle, transform, browserslistToTargets } from 'lightningcss';

// Get targets from the browserslist configuration in package.json or `.browserslistrc`
const targets = browserslistToTargets(browserslist('defaults'));

// Helper function to create a directory if it doesn't exist
const ensureDirExists = async (dirPath) => {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${dirPath}:`, error);
    process.exit(1);
  }
};

// Helper function to bundle and transform CSS using LightningCSS with the browserslist targets
const bundleAndTransformCSS = async (inputFile, outputFile, options = {}) => {
  try {
    // Bundle the CSS
    const bundleResult = bundle({
      filename: inputFile,
      drafts: {
        nesting: true,
        customMedia: true
      }
    });

    // Transform the bundled CSS to apply browser targets
    const transformResult = transform({
      filename: inputFile,
      code: bundleResult.code,
      targets,
      minify: options.minify || false,
      sourceMap: options.sourceMap || false,
    });

    // Write the final transformed CSS to the output file
    await ensureDirExists(path.dirname(outputFile));
    await fs.writeFile(outputFile, transformResult.code);
    
    // Optionally, write the source map
    if (transformResult.map) {
      const mapFile = `${outputFile}.map`;
      await fs.writeFile(mapFile, transformResult.map);
      console.log(`Built: ${outputFile} and source map: ${mapFile}`);
    } else {
      console.log(`Built: ${outputFile}`);
    }
  } catch (error) {
    console.error(`Error building ${outputFile}:`, error);
    process.exit(1);
  }
};

// Build functions
const buildReset = () => bundleAndTransformCSS('src/base/reset.css', 'build/sol.reset.css');
const buildCore = () => bundleAndTransformCSS('src/core.css', 'build/sol.core.css');
const buildComplete = () => bundleAndTransformCSS('src/sol.css', 'build/sol.css');
const buildMinify = async () => {
  try {
    // Ensure the minified directory exists
    await ensureDirExists('build/minified');

    const cssFiles = await fs.readdir('build');
    await Promise.all(
      cssFiles.filter(file => file.endsWith('.css')).map(file =>
        bundleAndTransformCSS(`build/${file}`, `build/minified/${file}`, { minify: true })
      )
    );
  } catch (error) {
    console.error('Error during minification:', error);
    process.exit(1);
  }
};

// Main build logic
const buildAll = async () => {
  await buildComplete();
  await buildCore();
  await buildReset();
  await buildMinify();
};

// CLI handling
const mode = process.argv[2];

switch (mode) {
  case 'dev':
    buildComplete();
    break;
  case 'reset':
    buildReset();
    break;
  case 'core':
    buildCore();
    break;
  case 'prod':
    buildAll();
    break;
  case 'min':
    buildMinify();
    break;
  case 'all':
    buildAll();
    break;
  default:
    console.error("Unknown build mode. Use 'dev', 'reset', 'core', 'prod', 'min', or 'all'.");
    process.exit(1);
}
