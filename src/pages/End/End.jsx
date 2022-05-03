import { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from 'state/data-context';

import { gsap, Power2 } from 'gsap/gsap-core';
import { AnimatedDiv } from 'components';
import { ANIMATION_TIME_SEC } from 'config';

// Sparkles
import bigSparkleImg from 'assets/img/sparkles/big.png';
import smallSparkleImg from 'assets/img/sparkles/small.png';

const End = () => {
  const dataCtx = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!dataCtx.data['meeting-amount']) {
      navigate('/questionnaire');
      return;
    } else {
      console.log(dataCtx.data);
      console.log('Submitted');
      // localStorage.clear();
    }
  }, [dataCtx, navigate]);

  const bigSparkle = useRef();
  const smallSparkle = useRef();

  useEffect(() => {
    gsap.from(bigSparkle.current, {
      opacity: 0,
      top: 0,
      left: '50%',
      duration: ANIMATION_TIME_SEC,
      ease: Power2,
    });
    gsap.from(smallSparkle.current, {
      opacity: 0,
      bottom: 0,
      right: '50%',
      duration: ANIMATION_TIME_SEC,
      ease: Power2,
    });
  }, []);

  return (
    <AnimatedDiv className='w-full h-screen flex justify-center items-center bg-background'>
      <div className='relative'>
        <img
          src={bigSparkleImg}
          alt='big sparkle'
          className='absolute top-[-100%] left-[10%]'
          ref={bigSparkle}
        />
        <p className='font-banner text-7xl text-white tracking-[.20em]'>
          მადლობა
        </p>
        <img
          src={smallSparkleImg}
          alt='small sparkle'
          className='absolute bottom-[-75%] right-[10%]'
          ref={smallSparkle}
        />
      </div>
    </AnimatedDiv>
  );
};

export default End;
