import { useState, useEffect } from "react";

function getStorageValue<T,>(key: string, defaultValue: T) {
  // getting stored value
  const storedValue = localStorage.getItem(key);
  const initial = storedValue !== null ? typeof storedValue === "string" ? storedValue : JSON.parse(storedValue) : null;
  return initial || defaultValue;
}

export const useLocalStorage = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, typeof defaultValue === "string" ? defaultValue : JSON.stringify(defaultValue));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};