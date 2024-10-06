import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
    const filePath = path.join(process.cwd(), 'src', 'fs', 'files', 'fresh.txt');
    try {
        const fileExists = await fs.stat(filePath).catch(() => false);

        if (fileExists) {
            throw new Error('FS operation failed');
        }

        await fs.writeFile(filePath, 'I am fresh and young');
    } catch (error) {
        console.error(error.message);
    }
};

await create();