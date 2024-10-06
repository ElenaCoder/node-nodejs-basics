import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const scriptPath = './src/cp/files/script.js';

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on('error', (error) => {
    console.error('Failed to start child process:', error);
  });
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);