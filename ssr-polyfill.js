// Polyfill localStorage for SSR — required by @typescript/vfs used in nextra.
// Node.js 22+ exposes a native localStorage getter that requires --localstorage-file;
// without a valid path it's broken, so we forcefully replace it.
const storage = new Map()
Object.defineProperty(globalThis, 'localStorage', {
  value: {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, String(value)),
    removeItem: (key) => storage.delete(key),
    clear: () => storage.clear(),
    get length() { return storage.size },
    key: (index) => [...storage.keys()][index] ?? null,
  },
  writable: true,
  configurable: true,
  enumerable: true,
})
