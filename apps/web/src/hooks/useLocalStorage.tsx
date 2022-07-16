import React from 'react';

const useLocalStorage = () => {
  const [storage, setStorage] = React.useState<Record<string, unknown>>({});

  React.useEffect(() => {
    setStorage(localStorage);
  }, []);

  const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, value);
    setStorage(prev => ({ ...prev, [key]: value }));
  };

  return { storage, setStorage: setLocalStorage };
};

export default useLocalStorage;
