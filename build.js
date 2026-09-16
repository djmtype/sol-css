import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import browserslist from 'browserslist';
import { bundle, transform, browserslistToTargets, Features } from 'lightningcss';

const targets = browserslistToTargets(browserslist('baseline widely available'));

const entries = [
  { input: 'src/sol.css', output: 'sol.css' },
  { input: 'src/core.css', output: 'sol.core.css' },
  { input: 'src/base/reset.css', output: 'sol.reset.css' },
];

async function build() {
  const buildDir = path.resolve('build');
  const minDir = path.resolve('build/minified');

  await mkdir(buildDir, { recursive: true });
  await mkdir(minDir, { recursive: true });

  for (const { input, output } of entries) {
    // Unminified pass
    const bundled = bundle({
      filename: input,
      targets,
      minify: false,
      drafts: { customMedia: true },
      exclude: Features.LightDark,
    });
    await writeFile(path.join(buildDir, output), bundled.code);

    // Minified pass
    const minified = transform({
      filename: output,
      code: bundled.code,
      minify: true,
      targets,
      exclude: Features.LightDark,
    });
    await writeFile(path.join(minDir, output), minified.code);

    console.log(`✓ Built ${output} & minified/${output}`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});