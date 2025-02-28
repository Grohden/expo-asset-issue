import fs from 'fs';
import path from 'path';
import {globSync} from 'glob';

const isCI = process.env.CI === '1' || process.env.CI === 'true';
const silent = process.argv.indexOf('--silent') !== -1 || isCI;
const fileArgIndex = process.argv.indexOf('--file');
const singleFilePath =
  fileArgIndex !== -1 ? process.argv[fileArgIndex + 1] : null;

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const folderPath = path.join(__dirname, '../src');

const globPattern = path.join(folderPath, '**/*.{ts,tsx}');

!silent && console.log(`Globbing files: ${globPattern}`);

function reorderImports(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // It is not perfect to use a regex, a parser could be better suited
  //  however we want this to be quick and regex works for now
  const importRegex = /import\s+[\s\S]*?['"]([^"']+)['"];?\n/g;
  const imports = [];
  let match;

  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  while ((match = importRegex.exec(fileContent)) !== null) {
    const importStatement = match[0];
    const source = match[1];
    imports.push({statement: importStatement, source});
  }

  // Categorize imports
  const groupedImports = {
    external: [],
    internal: [],
    local: [],
  };

  for (const {statement, source} of imports) {
    if (statement.includes('@src/')) {
      groupedImports.internal.push(statement);
    } else if (source.includes('./')) {
      groupedImports.local.push(statement);
    } else {
      groupedImports.external.push(statement);
    }
  }

  const sortedImports = [
    ...groupedImports.external,
    ...(groupedImports.external.length ? ['\n'] : []),
    ...groupedImports.internal,
    ...(groupedImports.internal.length ? ['\n'] : []),
    ...groupedImports.local,
    ...(groupedImports.local.length ? ['\n'] : []),
  ].join('');

  const contentWithoutImports = fileContent.replace(importRegex, '').trim();
  const newContent = `${sortedImports}${contentWithoutImports}\n`;

  if (fileContent !== newContent) {
    fs.writeFileSync(filePath, newContent);
    !silent && console.log(`Reordered imports in: ${filePath}`);
  } else {
    !silent && console.log(`File unchanged: ${filePath}`);
  }
}

if (singleFilePath) {
  reorderImports(singleFilePath);
  console.log('Finished reordering imports in the specified file.');
} else {
  try {
    const files = globSync(globPattern);
    for (const filePath of files) {
      reorderImports(filePath);
    }

    console.log(`Finished reordering imports in ${files.length} files.`);
  } catch (err) {
    console.error('Error finding files:', err);
  }
}
