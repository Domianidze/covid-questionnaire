import { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from 'state/DataContext';

import { gsap, Power2 } from 'gsap/gsap-core';
import { AnimatedDiv } from 'components';
import { API_URL, ANIMATION_TIME_SEC } from 'config';

// Sparkles
import bigSparkleImg from 'assets/img/sparkles/big.png';
import smallSparkleImg from 'assets/img/sparkles/small.png';

const getAntibodiesData = (contextData) => {
  return contextData.antibodies === 'antibodies-yes'
    ? {
        antibodies: {
          ...(contextData['antibodies-date'] && {
            test_date: contextData['antibodies-date'],
          }),
          ...(contextData['antibodies-amount'] && {
            number: +contextData['antibodies-amount'],
          }),
        },
      }
    : { covid_sickness_date: contextData['covid-date'] };
};

const getVaccineData = (contextData) => {
  return contextData.vaccine === 'vaccine-yes'
    ? {
        vaccination_stage: contextData['vaccine-state'],
      }
    : {
        i_am_waiting: contextData['vaccine-planning'],
      };
};

const submitData = async (contextData) => {
  try {
    const data = {
      // Identification
      first_name: contextData.firstname,
      last_name: contextData.lastname,
      email: contextData.email,

      // Covid
      had_covid: contextData['covid-contact'].replace('covid-', ''),
      had_antibody_test:
        contextData.antibodies === 'antibodies-yes' ? true : false,
      ...getAntibodiesData(contextData),

      // Vaccine
      had_vaccine: contextData.vaccine === 'vaccine-yes' ? true : false,
      ...getVaccineData(contextData),

      // Tips
      non_formal_meetings: contextData['meeting-amount'],
      number_of_days_from_office: +contextData['working-office-amount'],
      ...(contextData['in-person-meeting'] && {
        what_about_meetings_in_live: contextData['in-person-meeting'],
      }),
      ...(contextData['environment-opinion'] && {
        tell_us_your_opinion_about_us: contextData['environment-opinion'],
      }),
    };

    const response = await fetch(`${API_URL}/create`, {
      method: 'POST',
      body: JSON.stringify(data),
      header: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    localStorage.removeItem('data');
  } catch (err) {
    console.error(err);
  }
};

const End = () => {
  const { data: contextData } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!contextData['meeting-amount']) {
      navigate('/questionnaire');
      return;
    } else {
      submitData(contextData);
    }
  }, [contextData, navigate]);

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
    <AnimatedDiv className='w-full h-screen flex justify-center items-center bg-custom-black'>
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
