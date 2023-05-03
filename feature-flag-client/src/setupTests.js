import '@testing-library/jest-dom';
import crypto from 'crypto';

// eslint-disable-next-line no-undef
Object.defineProperty(globalThis, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});