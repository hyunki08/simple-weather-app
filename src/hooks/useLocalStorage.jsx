import React, { useState } from "react";

export const useLocalStorage = (key, initialvalue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialvalue;
    } catch (err) {
      console.log(err);
      return initialvalue;
    }
  });

  const setValue = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
};
