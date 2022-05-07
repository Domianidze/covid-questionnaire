import { useOutletContext } from 'react-router-dom';

import { AnimatedDiv, CustomRadio, Input, DateInput } from 'components';

import img from 'assets/img/steps/covid.png';

const Covid = () => {
  const { register, errors, watch } = useOutletContext();

  const covidContact = watch('covid-contact');
  const antibodies = watch('antibodies');

  return (
    <AnimatedDiv className='w-full h-5/6 flex justify-between'>
      <form
        className='w-1/2 mr-24 h-full overflow-auto'
        dataTestId='questionnaire-form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <CustomRadio
          question='გაქვს გადატანილი Covid-19?'
          radios={[
            { label: 'კი', id: 'covid-yes' },
            { label: 'არა', id: 'covid-no' },
            { label: 'ახლა მაქვს', id: 'covid-have_right_now' },
          ]}
          register={{
            ...register('covid-contact', {
              required: 'Covid-19ის ველი სავალდებულოა',
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
                required: 'ანტისხეულების ტესტის ველი სავალდებულოა',
              }),
            }}
            required={true}
            error={errors?.antibodies?.message}
          />
        ) : (
          ''
        )}
        {covidContact === 'covid-yes' && antibodies === 'antibodies-yes' ? (
          <AnimatedDiv className='py-5'>
            <p className='py-2 max-w-lg text-xl font-bold'>
              თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებით რიცხვი და
              ანტისხეულების რაოდენობა
            </p>
            <DateInput
              type='text'
              id='antibodies-date'
              register={{
                ...register('antibodies-date', {
                  required: 'ანტისხეულების ტესტის რიცხვის ველი სავალდებულოა',
                  pattern: {
                    value:
                      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
                    message: 'თქვენს მიერ შეყვანილი თარიღი არასწორია',
                  },
                }),
              }}
              placeholder='დდ/თთ/წწ'
              error={errors['antibodies-date']?.message}
              className='ml-5'
            />
            <Input
              type='number'
              id='antibodies-amount'
              register={{ ...register('antibodies-amount') }}
              placeholder='ანტისხეულების რაოდენობა'
              className='ml-5'
            />
          </AnimatedDiv>
        ) : (
          ''
        )}
        {covidContact === 'covid-yes' && antibodies === 'antibodies-no' ? (
          <AnimatedDiv className='py-5'>
            <p className='py-2 max-w-lg text-xl font-bold'>
              მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
            </p>
            <DateInput
              type='text'
              id='covid-date'
              register={{
                ...register('covid-date', {
                  required: 'Covid19–ის რიცხვის ველი სავალდებულოა',
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
          </AnimatedDiv>
        ) : (
          ''
        )}
      </form>
      <div className='w-1/2 pl-5'>
        <img src={img} alt='covid' className='pt-3 max-h-150'></img>
      </div>
    </AnimatedDiv>
  );
};

export default Covid;
