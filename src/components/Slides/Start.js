import { Link } from 'react-router-dom';

import logo from 'assets/img/logo.png';

const Start = () => {
  return (
    <>
      <img src={logo} alt='logo'></img>
      <Link
        to='/questionnaire'
        className='mt-24 max-w-xxs font-banner text-3xl text-center'
      >
        კითხვარის დაწყება
      </Link>
    </>
  );
};

export default Start;
