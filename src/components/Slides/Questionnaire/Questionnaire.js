// Steps
import Identification from './Steps/Identification';
import Covid from './Steps/Covid';
import Vaccine from './Steps/Vaccine';
import Tips from './Steps/Tips';

// Nav
import nextIcon from '../../../assets/img/nav/next.png';
import nextLockedIcon from '../../../assets/img/nav/next-locked.png';
import prevIcon from '../../../assets/img/nav/prev.png';

import HeaderLogo from '../../../assets/img/header-logo.png';

const Questionnaire = () => {
  return (
    <div className='w-full min-h-full flex flex-col justify-between'>
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
      <div className='w-full flex justify-between'>
        {/* <Identification /> */}
        {/* <Covid /> */}
        {/* <Vaccine /> */}
        <Tips />
      </div>
      {/* Navigation */}
      <div className='py-10 w-full flex justify-center'>
        <div className='w-36 flex justify-between'>
          <button type='button'>
            <img src={prevIcon} alt='previous icon'></img>
          </button>
          <button type='button'>
            <img src={nextIcon} alt='next icon'></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
