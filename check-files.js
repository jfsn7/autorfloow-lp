import fs from 'fs';
import path from 'path';

function listFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    console.log(`Directory: ${dir}`);
    for (const f of files) {
      const p = path.join(dir, f);
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        listFiles(p);
      } else {
        console.log(`  File: ${p}`);
      }
    }
  } catch (err) {
    console.log(`Error reading ${dir}: ${err.message}`);
  }
}

console.log('--- START ---');
listFiles('.');
console.log('--- END ---');
