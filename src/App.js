import { useContext } from 'react';
import DataContext from 'state/data-context';

import { Routes, Route, Navigate } from 'react-router-dom';

// Pages/Steps
import {
  Start,
  Questionnaire,
  Identification,
  Covid,
  Vaccine,
  Tips,
  End,
} from 'pages';

function App() {
  let data = JSON.parse(localStorage.getItem('data'));
  const { data: contextData } = useContext(DataContext);

  if (!data) data = {};
  if (Object.keys(contextData).length > 0) data = contextData;

  let lastAccessibleStep;

  if (data?.vaccine) {
    lastAccessibleStep = 'tips';
  } else if (data['covid-contact']) {
    lastAccessibleStep = 'vaccine';
  } else if (data?.firstname) {
    lastAccessibleStep = 'covid';
  } else {
    lastAccessibleStep = 'identification';
  }

  return (
    <div className='App'>
      {/* Wrapper */}
      <div className='w-full h-screen flex justify-center items-center flex-col'>
        <Routes>
          <Route path='/start' element={<Start data={data} />} />
          <Route path='/questionnaire' element={<Questionnaire />}>
            <Route path='identification' element={<Identification />} />
            {data?.firstname && <Route path='covid' element={<Covid />} />}
            {data['covid-contact'] && (
              <Route path='vaccine' element={<Vaccine />} />
            )}
            {data?.vaccine && <Route path='tips' element={<Tips />} />}
            <Route
              index
              path='*'
              element={<Navigate to={lastAccessibleStep} />}
            />
          </Route>
          <Route path='/end' element={<End />} />
          <Route path='*' element={<Navigate to='/start' />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
