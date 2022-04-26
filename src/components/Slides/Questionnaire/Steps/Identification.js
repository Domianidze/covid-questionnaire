import Input from '../../../UI/Input';
import img from '../../../../assets/img/steps/identification.png';

const Identification = () => {
  return (
    <>
      <form>
        <Input
          type='text'
          id='firstname'
          label='სახელი'
          value='სა'
          required={true}
          error='სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან'
        />
        <Input type='text' id='lastname' label='გვარი' required={true} />
        <Input type='email' id='email' label='მეილი' required={true} />
        {/* Info */}
        <div className='pt-24'>
          <div class='h-[1px] w-60 bg-background'></div>
          <p className='pt-5 text-[#626262] max-w-xs'>
            *–ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>
      </form>
      <div>
        <img src={img} alt='identification' className='h-150'></img>
      </div>
    </>
  );
};

export default Identification;
