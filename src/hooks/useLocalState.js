import React from 'react';


function useLocalState(key, initialValue) {  
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });


  const setValue = value => {
    try {
      // Allow value to be a Number so we have same API as useState
      const valueToStore =
        value instanceof Number ? value(storedValue) : value + 1;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalState;