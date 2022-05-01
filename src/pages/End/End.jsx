import { useEffect, useContext } from 'react';

import DataContext from 'state/data-context';

const End = () => {
  const dataCtx = useContext(DataContext);
  const data = dataCtx.data;

  useEffect(() => {
    console.log(data);
    console.log('Submitted');
  }, [data]);

  return (
    <div className='w-full h-full flex justify-center items-center bg-background'>
      <p className='font-banner text-7xl text-white tracking-[.20em]'>
        მადლობა
      </p>
    </div>
  );
};

export default End;
