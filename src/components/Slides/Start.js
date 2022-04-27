import { useContext } from 'react';
import NavContext from 'store/nav-context';

import logo from 'assets/img/logo.png';

const Start = () => {
  const navCtx = useContext(NavContext);

  return (
    <>
      <img src={logo} alt='logo'></img>
      <button
        type='button'
        className='mt-24 font-banner text-3xl max-w-[175px]'
        onClick={navCtx.onNextSlide}
      >
        კითხვარის დაწყება
      </button>
    </>
  );
};

export default Start;
