import { useContext } from 'react';
import NavContext from 'store/nav-context';

// Slides
import Start from 'components/Slides/Start';
import Questionnaire from 'components/Slides/Questionnaire/Questionnaire';
import End from 'components/Slides/End';

function App() {
  const navCtx = useContext(NavContext);

  const Slide = () => {
    const curSlide = navCtx.curSlide;

    if (curSlide === 0) {
      return <Start />;
    } else if (curSlide > 0 && curSlide < 5) {
      return <Questionnaire />;
    } else if (curSlide === 5) {
      return <End />;
    } else {
      console.error('Invalid Slide');
    }
  };

  return (
    <div className='App'>
      {/* Wrapper */}
      <div className='w-full h-screen flex justify-center items-center flex-col'>
        <Slide />
      </div>
    </div>
  );
}

export default App;
