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
  return (
    <div className='App'>
      {/* Wrapper */}
      <div className='w-full h-screen flex justify-center items-center flex-col'>
        <Routes>
          <Route path='/start' element={<Start />} />
          <Route path='/questionnaire' element={<Questionnaire />}>
            <Route path='identification' element={<Identification />} />
            <Route path='covid' element={<Covid />} />
            <Route path='vaccine' element={<Vaccine />} />
            <Route path='tips' element={<Tips />} />
            <Route index element={<Navigate to='identification' />} />
          </Route>
          <Route path='/end' element={<End />} />
          <Route path='*' element={<Navigate to='/start' />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
