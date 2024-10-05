import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const decompress = async () => {
  const inputPath = path.join(process.cwd(), 'src', 'zip', 'files', 'archive.gz');
  const outputPath = path.join(process.cwd(), 'src', 'zip', 'files', 'fileToCompress.txt');

  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);

  const gunzipStream = zlib.createGunzip();

  readStream
    .pipe(gunzipStream)
    .pipe(writeStream)
    .on('finish', () => {
      console.log('File decompressed successfully');
    });

  readStream.on('error', (err) => {
    console.error('Error reading file:', err.message);
  });

  writeStream.on('error', (err) => {
    console.error('Error writing file:', err.message);
  });

  gunzipStream.on('error', (err) => {
    console.error('Error during decompression:', err.message);
  });
};

await decompress();