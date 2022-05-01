import React, { useState } from 'react';

const DataContext = React.createContext({
  data: {},
  saveData: () => {},
});

export const DataContextProvider = (props) => {
  const [data, setData] = useState({});

  const saveData = (data) => {
    setData(data);
  };

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
