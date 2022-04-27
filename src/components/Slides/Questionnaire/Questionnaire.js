import { useContext } from 'react';
import NavContext from 'store/nav-context';

// Steps
import Identification from './Steps/Identification';
import Covid from './Steps/Covid';
import Vaccine from './Steps/Vaccine';
import Tips from './Steps/Tips';

// Nav
import nextIcon from 'assets/img/nav/next.png';
import nextLockedIcon from 'assets/img/nav/next-locked.png';
import prevIcon from 'assets/img/nav/prev.png';

import HeaderLogo from 'assets/img/header-logo.png';

const Questionnaire = () => {
  const navCtx = useContext(NavContext);
  const curSlide = navCtx.curSlide;

  const steps = [<Identification />, <Covid />, <Vaccine />, <Tips />];

  return (
    <div className='py-24 px-48 w-full min-h-full flex flex-col justify-between'>
      {/* Header */}
      <div className='w-full flex flex-col'>
        {/* Info */}
        <div className='w-full flex justify-between items-center'>
          <img src={HeaderLogo} alt='header logo'></img>
          <p className='font-counter text-4xl'>1/4</p>
        </div>
        {/* Line */}
        <div className='my-3 w-full h-[2px] bg-background'></div>
      </div>
      {/* Main */}
      <div className='w-full flex justify-between'>{steps[curSlide - 1]}</div>
      {/* Navigation */}
      <div className='py-10 w-full flex justify-center'>
        <div className='w-36 flex justify-between'>
          <button
            type='button'
            disabled={curSlide === 1 ? true : false}
            className={curSlide === 1 ? 'opacity-0' : ''}
            onClick={navCtx.onPrevSlide}
          >
            <img src={prevIcon} alt='previous icon'></img>
          </button>
          <button
            type='button'
            disabled={curSlide === 4 ? true : false}
            className={curSlide === 4 ? 'opacity-0' : ''}
            onClick={navCtx.onNextSlide}
          >
            <img src={nextIcon} alt='next icon'></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
