import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logoPath = join(__dirname, '../src/assets/logo.svg');
const publicDir = join(__dirname, '../public');

// SVGファイルを読み込む
const svgBuffer = readFileSync(logoPath);

// 512x512のPNGを生成
await sharp(svgBuffer)
  .resize(512, 512, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 0 } // 透明背景
  })
  .png()
  .toFile(join(publicDir, 'logo512.png'));

console.log('✓ logo512.png generated');

// 192x192のPNGを生成
await sharp(svgBuffer)
  .resize(192, 192, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 0 } // 透明背景
  })
  .png()
  .toFile(join(publicDir, 'logo192.png'));

console.log('✓ logo192.png generated');

console.log('All logo files generated successfully!');

