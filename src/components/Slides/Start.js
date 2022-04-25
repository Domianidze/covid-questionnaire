import Logo from '../../assets/img/logo.png';

const Start = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <img src={Logo} alt='logo'></img>
      <button
        type='button'
        className='mt-24 font-banner text-3xl max-w-[175px]'
      >
        კითხვარის დაწყება
      </button>
    </div>
  );
};

export default Start;
