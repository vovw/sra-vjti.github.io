#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85;
const EFFORT = 6; // 0-6, higher = better compression but slower

// Image extensions to convert
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

// Directories to skip
const SKIP_DIRS = ['node_modules', '.next', '.git'];

let totalOriginalSize = 0;
let totalOptimizedSize = 0;
let convertedCount = 0;
let skippedCount = 0;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  // Skip if already WebP
  if (ext === '.webp') {
    console.log(`⏭️  Skipping (already WebP): ${path.basename(filePath)}`);
    skippedCount++;
    return;
  }

  // Skip if not an image we want to convert
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }

  const outputPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

  // Skip if WebP version already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping (WebP exists): ${path.basename(filePath)}`);
    skippedCount++;
    return;
  }

  try {
    const originalStats = fs.statSync(filePath);
    totalOriginalSize += originalStats.size;

    // Convert to WebP
    await sharp(filePath)
      .webp({ quality: QUALITY, effort: EFFORT })
      .toFile(outputPath);

    const optimizedStats = fs.statSync(outputPath);
    totalOptimizedSize += optimizedStats.size;

    const reduction = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
    const originalKB = (originalStats.size / 1024).toFixed(1);
    const optimizedKB = (optimizedStats.size / 1024).toFixed(1);

    console.log(
      `✅ ${path.basename(filePath)} → ${path.basename(outputPath)}: ${originalKB}KB → ${optimizedKB}KB (${reduction}% smaller)`
    );

    convertedCount++;

    // Optional: Remove original to save space (commented out for safety)
    // fs.unlinkSync(filePath);
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!SKIP_DIRS.includes(entry.name)) {
        await processDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  console.log('🎨 Starting image optimization...\n');
  console.log(`📁 Processing directory: ${PUBLIC_DIR}\n`);

  const startTime = Date.now();

  await processDirectory(PUBLIC_DIR);

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log('\n✨ Optimization complete!\n');
  console.log('📊 Statistics:');
  console.log(`  • Images converted: ${convertedCount}`);
  console.log(`  • Images skipped: ${skippedCount}`);
  console.log(`  • Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  • Optimized total size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);

  if (totalOriginalSize > 0) {
    const totalReduction = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);
    const savedMB = ((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2);
    console.log(`  • Total reduction: ${totalReduction}% (saved ${savedMB} MB)`);
  }

  console.log(`  • Time taken: ${duration}s`);
  console.log('\n💡 Tip: Update your code to use .webp extensions for the converted images!');
}

main().catch(console.error);
