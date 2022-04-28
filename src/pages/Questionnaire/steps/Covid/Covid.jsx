import { CustomRadio, Input } from 'components';
import img from 'assets/img/steps/covid.png';

const Covid = () => {
  return (
    <>
      <form>
        <CustomRadio
          question='გაქვს გადატანილი Covid-19?'
          radios={[
            { label: 'კი', id: 'covid-yes' },
            { label: 'არა', id: 'covid-no' },
            { label: 'ახლა მაქვს', id: 'covid-currently' },
          ]}
          name='covid-contact'
          required={true}
        />
        <CustomRadio
          question='ანტისხეულების ტესტი გაქვს გაკეთებული?'
          radios={[
            { label: 'კი', id: 'antibodies-yes' },
            { label: 'არა', id: 'antibodies-no' },
          ]}
          name='antibodies'
          required={true}
        />
        <div className='py-5'>
          <p className='py-2 max-w-lg text-xl font-bold'>
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებით რიცხვი და ანტისხეულების
            რაოდენობა*
          </p>
          <Input
            type='number'
            id='antibodies-number'
            placeholder='რიცხვი'
            className='ml-5'
          />
          <Input
            type='number'
            id='antibodies-amount'
            placeholder='ანტისხეულების რაოდენობა'
            className='ml-5'
          />
        </div>
        <div className='py-5'>
          <p className='py-2 max-w-lg text-xl font-bold'>
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
          </p>
          <Input
            type='text'
            id='covid-date'
            placeholder='დდ/თთ/წწ'
            className='ml-5'
          />
        </div>
      </form>
      <div>
        <img src={img} alt='covid' className='h-150'></img>
      </div>
    </>
  );
};

export default Covid;
