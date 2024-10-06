import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const compress = async () => {
  const filePath = path.join(process.cwd(), 'src', 'zip', 'files', 'fileToCompress.txt');
  const outputPath = path.join(process.cwd(), 'src', 'zip', 'files', 'archive.gz');

  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(outputPath);

  const gzipStream = zlib.createGzip();

  readStream
    .pipe(gzipStream)
    .pipe(writeStream)
    .on('finish', () => {
      console.log('File compressed successfully');
    });

  readStream.on('error', (err) => {
    console.error('Error reading file:', err.message);
  });

  writeStream.on('error', (err) => {
    console.error('Error writing file:', err.message);
  });

  gzipStream.on('error', (err) => {
    console.error('Error during compression:', err.message);
  });
};

await compress();