import React, { useState } from "react";

export const useLocalStorage = (key, initialvalue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      console.log("item : ", item);
      return item ? JSON.parse(item) : initialvalue;
    } catch (err) {
      console.log(err);
      return initialvalue;
    }
  });

  const setValue = value => {
    try {
      console.log("stored : ", value);
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
};
