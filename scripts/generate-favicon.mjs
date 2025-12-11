import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicon() {
  console.log('Generating favicon.ico from logo192.png...');

  // logo192.pngから各サイズのPNGを生成（高品質）
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  // 高品質なリサイズ設定
  for (const size of sizes) {
    const buffer = await sharp(resolve(__dirname, '../public/logo192.png'))
      .resize(size, size, {
        kernel: sharp.kernel.lanczos3,  // 高品質リサイズアルゴリズム
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }  // 透過背景
      })
      .png({
        quality: 100,
        compressionLevel: 9
      })
      .toBuffer();
    pngBuffers.push(buffer);
    console.log(`  Generated ${size}x${size} PNG`);
  }

  // png-to-icoを使ってICOファイルを生成
  const icoBuffer = await pngToIco(pngBuffers);
  
  const outputPath = resolve(__dirname, '../public/favicon.ico');
  writeFileSync(outputPath, icoBuffer);
  console.log(`\nfavicon.ico generated at: ${outputPath}`);
}

generateFavicon().catch(console.error);
