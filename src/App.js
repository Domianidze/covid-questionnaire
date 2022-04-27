// Slides
import Start from 'components/Slides/Start';
import Questionnaire from 'components/Slides/Questionnaire/Questionnaire';
import End from 'components/Slides/End';

function App() {
  return (
    <div className='App'>
      {/* Wrapper */}
      <div className='py-24 px-48 w-full h-screen flex justify-center items-center flex-col'>
        {/* <Start /> */}
        <Questionnaire />
        {/* <End /> */}
      </div>
    </div>
  );
}

export default App;
