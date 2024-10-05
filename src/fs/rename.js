import { promises as fs } from 'fs';
import path from 'path';

const rename = async () => {
  const oldFilePath = path.join(process.cwd(), 'src', 'fs', 'files', 'wrongFilename.txt');
  const newFilePath = path.join(process.cwd(), 'src', 'fs', 'files', 'properFilename.md');

  try {
    const oldFileExists = await fs.stat(oldFilePath).catch(() => false);
    if (!oldFileExists) {
      throw new Error('FS operation failed');
    }

    const newFileExists = await fs.stat(newFilePath).catch(() => false);
    if (newFileExists) {
      throw new Error('FS operation failed');
    }

    await fs.rename(oldFilePath, newFilePath);
    console.log('File renamed successfully');
  } catch (error) {
    console.error(error.message);
  }
};

await rename();