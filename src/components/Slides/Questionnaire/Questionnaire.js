import { Outlet, Link, useLocation } from 'react-router-dom';

// Nav
import nextIcon from 'assets/img/nav/next.png';
import nextLockedIcon from 'assets/img/nav/next-locked.png';
import prevIcon from 'assets/img/nav/prev.png';

import HeaderLogo from 'assets/img/header-logo.png';

const Questionnaire = () => {
  const steps = [
    '/questionnaire/identification',
    '/questionnaire/covid',
    '/questionnaire/vaccine',
    '/questionnaire/tips',
  ];
  const pathname = useLocation().pathname;
  const curStep = steps.findIndex((step) => pathname === step);

  return (
    <div className='py-24 px-48 w-full min-h-full flex flex-col justify-between'>
      {/* Header */}
      <div className='w-full flex flex-col'>
        {/* Info */}
        <div className='w-full flex justify-between items-center'>
          <img src={HeaderLogo} alt='header logo'></img>
          <p className='font-counter text-4xl'>{curStep + 1}/4</p>
        </div>
        {/* Line */}
        <div className='my-3 w-full h-[2px] bg-background'></div>
      </div>
      {/* Main */}
      <div className='w-full flex justify-between'>
        <Outlet />
      </div>
      {/* Navigation */}
      <div className='py-10 w-full flex justify-center'>
        <div className='w-36 flex justify-between'>
          <Link
            to={curStep > 0 && steps[curStep - 1]}
            className={curStep <= 0 ? 'pointer-events-none opacity-0' : ''}
          >
            <img src={prevIcon} alt='previous icon'></img>
          </Link>
          <Link
            to={curStep < steps.length - 1 && steps[curStep + 1]}
            className={
              curStep >= steps.length - 1 ? 'pointer-events-none opacity-0' : ''
            }
          >
            <img src={nextIcon} alt='next icon'></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
