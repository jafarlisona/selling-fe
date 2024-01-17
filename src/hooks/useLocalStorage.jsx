import React, { useEffect, useState } from "react";

function useLocalStorage(key, val = "") {
  const [value, setValue] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : val
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
