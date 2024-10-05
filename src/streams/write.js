import fs from 'fs';
import path from 'path';

const write = async () => {
  const filePath = path.join(process.cwd(), 'src', 'streams', 'files', 'fileToWrite.txt');

  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Data written successfully');
  });

  writeStream.on('error', (err) => {
    console.error('Error writing to file:', err.message);
  });
};

await write();