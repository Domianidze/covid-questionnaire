import { useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import DataContext from 'state/data-context';

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
      localStorage.clear();
    }
  }, [dataCtx, navigate]);

  return (
    <div className='w-full h-full flex justify-center items-center bg-background'>
      <p className='font-banner text-7xl text-white tracking-[.20em]'>
        მადლობა
      </p>
    </div>
  );
};

export default End;
