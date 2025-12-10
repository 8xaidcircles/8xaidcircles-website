import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ICOファイルを生成する関数
async function generateFavicon() {
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  console.log('Generating favicon.ico from logo.svg...');

  // 各サイズのPNGを生成
  for (const size of sizes) {
    const buffer = await sharp(resolve(__dirname, '../src/assets/logo.svg'))
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers.push({ size, buffer });
    console.log(`  Generated ${size}x${size} PNG`);
  }

  // ICOファイルを手動で構築
  const icoBuffer = createIco(pngBuffers);
  
  const outputPath = resolve(__dirname, '../public/favicon.ico');
  writeFileSync(outputPath, icoBuffer);
  console.log(`\nfavicon.ico generated at: ${outputPath}`);
}

// ICOファイル形式を構築する関数
function createIco(images) {
  // ICOヘッダー: 6バイト
  // エントリー: 各16バイト
  // 画像データ: PNG形式で格納

  const headerSize = 6;
  const entrySize = 16;
  const numImages = images.length;
  
  // データオフセットを計算
  let offset = headerSize + (entrySize * numImages);
  const entries = [];
  
  for (const img of images) {
    entries.push({
      width: img.size === 256 ? 0 : img.size,
      height: img.size === 256 ? 0 : img.size,
      colorCount: 0,
      reserved: 0,
      planes: 1,
      bitCount: 32,
      size: img.buffer.length,
      offset: offset
    });
    offset += img.buffer.length;
  }

  // バッファを作成
  const totalSize = offset;
  const buffer = Buffer.alloc(totalSize);
  let pos = 0;

  // ICOヘッダーを書き込み
  buffer.writeUInt16LE(0, pos); pos += 2;      // Reserved
  buffer.writeUInt16LE(1, pos); pos += 2;      // Type: 1 = ICO
  buffer.writeUInt16LE(numImages, pos); pos += 2; // Number of images

  // エントリーを書き込み
  for (const entry of entries) {
    buffer.writeUInt8(entry.width, pos); pos += 1;
    buffer.writeUInt8(entry.height, pos); pos += 1;
    buffer.writeUInt8(entry.colorCount, pos); pos += 1;
    buffer.writeUInt8(entry.reserved, pos); pos += 1;
    buffer.writeUInt16LE(entry.planes, pos); pos += 2;
    buffer.writeUInt16LE(entry.bitCount, pos); pos += 2;
    buffer.writeUInt32LE(entry.size, pos); pos += 4;
    buffer.writeUInt32LE(entry.offset, pos); pos += 4;
  }

  // 画像データを書き込み
  for (const img of images) {
    img.buffer.copy(buffer, pos);
    pos += img.buffer.length;
  }

  return buffer;
}

generateFavicon().catch(console.error);

