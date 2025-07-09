#!/usr/bin/env node

/**
 * Cross-platform script to copy KPP assets from the downloaded files directory
 * to the public/images directory for use in the application.
 * 
 * This replaces the Windows-only copy-images.ps1 script.
 */

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), 'Kinetic Power Plant (KPP) Technology – Technical Overview_files');
const targetDir = path.join(process.cwd(), 'public', 'images');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Files to copy (mapping from source to target)
const filesToCopy = [
  { source: '100KW-Tower.avif', target: 'kpp-tower.avif' },
  { source: 'KPP-tower.avif', target: 'kpp-tower-alt.avif' },
  { source: 'air-compressor.avif', target: 'air-compressor.avif' },
  { source: 'air-system.avif', target: 'air-system.avif' },
  { source: 'generator.avif', target: 'generator.avif' },
  { source: 'cabinet.avif', target: 'cabinet.avif' },
  // Add more files as needed
];

console.log('🚀 Starting asset copy process...');

let copiedCount = 0;
let skippedCount = 0;

filesToCopy.forEach(({ source, target }) => {
  const sourcePath = path.join(sourceDir, source);
  const targetPath = path.join(targetDir, target);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Copied: ${source} → ${target}`);
      copiedCount++;
    } else {
      console.log(`⚠️  Skipped: ${source} (not found)`);
      skippedCount++;
    }
  } catch (error) {
    console.error(`❌ Error copying ${source}:`, error.message);
  }
});

console.log(`\n📊 Copy Summary:`);
console.log(`   ✅ Copied: ${copiedCount} files`);
console.log(`   ⚠️  Skipped: ${skippedCount} files`);
console.log(`   📁 Target: ${targetDir}`);

if (copiedCount === 0 && skippedCount > 0) {
  console.log(`\n💡 Tip: Make sure the source directory exists:`);
  console.log(`   ${sourceDir}`);
}
