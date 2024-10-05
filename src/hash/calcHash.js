import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
  const filePath = path.join(process.cwd(), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt');
  const readStream = fs.createReadStream(filePath);
  const hash = crypto.createHash('sha256');

  readStream.pipe(hash);
  hash.setEncoding('hex');
  hash.on('finish', () => {
    console.log(hash.read());
  });

  readStream.on('error', (err) => {
    console.error('Error reading file:', err.message);
  });
};

await calculateHash();