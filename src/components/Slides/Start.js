import logo from 'assets/img/logo.png';

const Start = () => {
  return (
    <>
      <img src={logo} alt='logo'></img>
      <button
        type='button'
        className='mt-24 font-banner text-3xl max-w-[175px]'
      >
        კითხვარის დაწყება
      </button>
    </>
  );
};

export default Start;
