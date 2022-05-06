import { useContext } from 'react';
import DataContext from 'state/DataContext';

import { AnimatePresence } from 'framer-motion';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Helmet from 'react-helmet';

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

  if (Object.keys(contextData).length > 0) data = contextData;
  if (!data) data = {};

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

  const location = useLocation();

  return (
    <div className='App'>
      <Helmet>
        <title>Redberry - Covid Questionnaire</title>
      </Helmet>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            path='/start'
            element={
              <Start data={data} lastAccessibleStep={lastAccessibleStep} />
            }
          />
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
      </AnimatePresence>
    </div>
  );
}

export default App;
