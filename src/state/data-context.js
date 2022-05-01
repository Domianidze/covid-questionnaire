import React, { useState, useEffect } from 'react';

const DataContext = React.createContext({
  data: {},
  saveData: () => {},
});

export const DataContextProvider = (props) => {
  const [data, setData] = useState({});

  const saveData = (data) => {
    setData(data);
  };

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const response = localStorage.getItem('data');
    if (!response) return;
    const data = JSON.parse(response);
    if (Object.keys(data).length > 0) {
      saveData(data);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        saveData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
