import { useOutletContext } from 'react-router-dom';

import { Input } from 'components';
import img from 'assets/img/steps/identification.png';

const Identification = () => {
  const { register, errors } = useOutletContext();

  let emailError;
  if (errors?.email?.type === 'invalidEmail') {
    emailError = 'თქვენ მიერ შეყვანილი მეილი არასწორია';
  }
  if (errors?.email?.type === 'notRedberryEmail') {
    emailError =
      'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
  }

  return (
    <>
      <form className='w-1/2 pr-5'>
        <Input
          type='text'
          id='firstname'
          register={{
            ...register('firstname', {
              required: 'ველი სავალდებულოა',
              minLength: {
                value: 2,
                message: 'ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
              maxLength: {
                value: 255,
                message: 'ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
              },
              pattern: {
                value: /^[ა-ჰa-zA-Z]+$/,
                message: 'ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
              },
            }),
          }}
          label='სახელი'
          required={true}
          error={errors?.firstname?.message}
        />
        <Input
          type='text'
          id='lastname'
          register={{
            ...register('lastname', {
              required: 'ველი სავალდებულოა',
              minLength: {
                value: 2,
                message: 'ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
              maxLength: {
                value: 255,
                message: 'ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
              },
              pattern: {
                value: /^[ა-ჰa-zA-Z]+$/,
                message: 'ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს',
              },
            }),
          }}
          label='გვარი'
          required={true}
          error={errors?.lastname?.message}
        />
        <Input
          type='email'
          id='email'
          register={{
            ...register('email', {
              required: 'ველი სავალდებულოა',
              validate: {
                invalidEmail: (email) => /^\S+@\S+\.\S+$/.test(email),
                notRedberryEmail: (email) => email.endsWith('redberry.ge'),
              },
            }),
          }}
          label='მეილი'
          required={true}
          error={emailError ? emailError : errors?.email?.message}
        />
        {/* Info */}
        <div className='pt-24'>
          <div className='h-[1px] w-60 bg-background'></div>
          <p className='pt-5 text-[#626262] max-w-xs'>
            *–ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>
      </form>
      <div className='w-1/2 pl-5'>
        <img src={img} alt='identification' className='pt-3 max-h-150'></img>
      </div>
    </>
  );
};

export default Identification;
