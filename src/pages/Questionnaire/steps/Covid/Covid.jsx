import { useOutletContext } from 'react-router-dom';

import { CustomRadio, Input } from 'components';
import img from 'assets/img/steps/covid.png';

const Covid = () => {
  const { register, errors, watch } = useOutletContext();

  const covidContact = watch('covid-contact');
  const antibodies = watch('antibodies');

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
          register={{
            ...register('covid-contact', {
              required: 'ველი სავალდებულოა',
            }),
          }}
          required={true}
          error={errors['covid-contact']?.message}
        />
        {covidContact === 'covid-yes' ? (
          <CustomRadio
            question='ანტისხეულების ტესტი გაქვს გაკეთებული?'
            radios={[
              { label: 'კი', id: 'antibodies-yes' },
              { label: 'არა', id: 'antibodies-no' },
            ]}
            register={{
              ...register('antibodies', {
                required: 'ველი სავალდებულოა',
              }),
            }}
            required={true}
            error={errors?.antibodies?.message}
          />
        ) : (
          ''
        )}
        {antibodies === 'antibodies-yes' ? (
          <div className='py-5'>
            <p className='py-2 max-w-lg text-xl font-bold'>
              თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებით რიცხვი და
              ანტისხეულების რაოდენობა
            </p>
            <Input
              type='number'
              id='antibodies-number'
              register={{ ...register('antibodies-number') }}
              placeholder='რიცხვი'
              className='ml-5'
            />
            <Input
              type='number'
              id='antibodies-amount'
              register={{ ...register('antibodies-amount') }}
              placeholder='ანტისხეულების რაოდენობა'
              className='ml-5'
            />
          </div>
        ) : (
          ''
        )}
        {antibodies === 'antibodies-no' ? (
          <div className='py-5'>
            <p className='py-2 max-w-lg text-xl font-bold'>
              მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
            </p>
            <Input
              type='text'
              id='covid-date'
              register={{
                ...register('covid-date', {
                  required: 'ველი სავალდებულოა',
                  pattern: {
                    value:
                      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
                    message: 'თქვენს მიერ შეყვანილი თარიღი არასწორია',
                  },
                }),
              }}
              placeholder='დდ/თთ/წწ'
              error={errors['covid-date']?.message}
              className='ml-5'
            />
          </div>
        ) : (
          ''
        )}
      </form>
      <div>
        <img src={img} alt='covid' className='max-h-150'></img>
      </div>
    </>
  );
};

export default Covid;
