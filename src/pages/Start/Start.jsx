import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { gsap, Power2 } from 'gsap/gsap-core';

import { AnimatedDiv } from 'components';
import { ANIMATION_TIME_SEC } from 'config';

import logo from 'assets/img/huge-logo.png';

const Start = (props) => {
  const logoRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden';
    gsap.to(logoRef.current, {
      width: 100,
      height: 100,
      duration: ANIMATION_TIME_SEC,
      delay: 0.5,
      ease: Power2,
    });
    setTimeout(() => {
      document.querySelector('body').style.overflow = 'initial';
    }, (ANIMATION_TIME_SEC + 0.5) * 1000);
    gsap.to(btnRef.current, {
      y: 0,
      duration: ANIMATION_TIME_SEC,
      delay: ANIMATION_TIME_SEC + 0.5,
    });
  }, []);

  return (
    <AnimatedDiv className='w-full h-screen flex justify-center items-center flex-col'>
      <img src={logo} alt='logo' ref={logoRef}></img>
      <Link
        to={`/questionnaire/${props.lastAccessibleStep}`}
        className='mt-24 max-w-xxs font-banner text-3xl text-center overflow-hidden'
      >
        <span className='inline-block -translate-y-full' ref={btnRef}>
          კითხვარის {props.data?.firstname ? 'გაგრძელება' : 'დაწყება'}
        </span>
      </Link>
    </AnimatedDiv>
  );
};

export default Start;
