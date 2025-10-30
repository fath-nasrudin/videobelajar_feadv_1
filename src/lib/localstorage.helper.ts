// ---- helpers for localStorage (safe-guarded) ----
export function isClient() {
  return typeof window !== "undefined" && !!window.localStorage;
}

export function readStorage<T>(key: string): T | null {
  if (!isClient()) return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (e) {
    console.error(`${key}: failed to read storage`, e);
    return null;
  }
}

export function writeStorage(key: string, value: any) {
  if (!isClient()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    // notify other listeners in same tab
    window.dispatchEvent(new CustomEvent(`${key}:changed`));
  } catch (e) {
    console.error(`${key}: failed to write storage`, e);
  }
}

export function removeStorage(key: string) {
  if (!isClient()) return;
  try {
    window.localStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent(`${key}:changed`));
  } catch (e) {
    console.error(`${key}: failed to remove storage`, e);
  }
}

// generate a very simple id/token (not secure)
export function randId(prefix: string) {
  return prefix + Math.random().toString(36).slice(2, 10);
}
