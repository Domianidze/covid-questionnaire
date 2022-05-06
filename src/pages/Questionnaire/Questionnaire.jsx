import { useState, useEffect, useContext } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import DataContext from 'state/DataContext';

import { QUESTIONNAIRE_STEPS } from 'config';

// Nav
import nextIcon from 'assets/img/nav/next.png';
import prevIcon from 'assets/img/nav/prev.png';

import HeaderLogo from 'assets/img/header-logo.png';

const Questionnaire = () => {
  const dataCtx = useContext(DataContext);

  const [submittingError, setSubmittingError] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, submitCount, isSubmitSuccessful },
    watch,
    setValue,
  } = useForm({
    mode: 'onTouched',
  });

  // Get curstep using pathname
  const steps = QUESTIONNAIRE_STEPS;
  const pathname = useLocation().pathname;
  const curStep = steps.findIndex((step) => pathname === step);

  const saveDataHandler = (data) => {
    dataCtx.saveData(data);
    if (curStep < steps.length - 1) {
      navigate(steps[curStep + 1]);
    } else if (curStep === steps.length - 1) {
      navigate('/end');
    }
  };

  const bindedHandleSubmit = handleSubmit.bind(null, saveDataHandler);

  useEffect(() => {
    Object.entries(dataCtx.data).forEach((field) => {
      setValue(field[0], field[1]);
    });
  }, [dataCtx.data, setValue]);

  useEffect(() => {
    if (!isSubmitSuccessful && submitCount > 0) {
      setSubmittingError(true);
      setTimeout(() => {
        setSubmittingError(false);
      }, 2000);
    }
  }, [isSubmitSuccessful, submitCount]);

  let nextBtnClassName;

  if (curStep >= steps.length - 1) {
    nextBtnClassName = 'pointer-events-none opacity-0';
  } else if (!isValid) {
    nextBtnClassName = 'opacity-50 hover:opacity-50';
  }

  return (
    <div className='py-5 px-5 mx-auto w-full min-h-screen flex flex-col justify-between 2xl:py-20 2xl:px-0 2xl:w-375'>
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
      <Outlet
        context={{ register, errors, isValid, watch, bindedHandleSubmit }}
      />
      {/* Navigation */}
      <div className='py-10 w-full flex justify-center'>
        <div className='w-36 flex justify-between'>
          <Link
            to={curStep > 0 && steps[curStep - 1]}
            className={curStep <= 0 ? 'pointer-events-none opacity-0' : ''}
          >
            <img src={prevIcon} alt='previous icon'></img>
          </Link>
          <div className='relative'>
            <p
              className={`absolute top-[-30px] -translate-x-[40%] font-bold opacity-0 whitespace-nowrap duration-200 ${
                curStep !== steps.length - 1 && submittingError && 'opacity-50'
              }`}
            >
              ჯერ შეავშე {'<'}3
            </p>
            <button
              className={nextBtnClassName}
              onClick={handleSubmit(saveDataHandler)}
            >
              <img src={nextIcon} alt='next icon'></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
