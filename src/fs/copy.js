import { promises as fs } from 'fs';
import path from 'path';

const copy = async () => {
  const sourceFolderPath = path.join(process.cwd(), 'src', 'fs', 'files');
  const destinationFolderPath = path.join(process.cwd(), 'src', 'fs', 'files_copy');

  try {
    const sourceFolderExists = await fs.stat(sourceFolderPath).catch(() => false);
    if (!sourceFolderExists) {
      throw new Error('FS operation failed');
    }

    const destinationFolderExists = await fs.stat(destinationFolderPath).catch(() => false);
    if (destinationFolderExists) {
      throw new Error('FS operation failed');
    }

    await fs.cp(sourceFolderPath, destinationFolderPath, { recursive: true });
    console.log('Folder files_copy copied successfully');
  } catch (error) {
    console.error(error.message);
  }
};

// Execute the copy function
await copy();