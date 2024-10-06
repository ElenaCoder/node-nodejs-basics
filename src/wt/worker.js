import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message', (n) => {
    try {
        const result = nthFibonacci(n);
        parentPort.postMessage(result);
      } catch (err) {
        parentPort.postMessage({ error: err.message });
      }
  });