export function getLocalStorage<T>(key: string) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) return null;

    const data = JSON.parse(value);

    return data as T;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}
