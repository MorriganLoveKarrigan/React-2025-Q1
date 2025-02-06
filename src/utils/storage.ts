export const setLocalStorage = (key: string, searchName: string): void => {
  localStorage.setItem(key, searchName);
};

export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};
