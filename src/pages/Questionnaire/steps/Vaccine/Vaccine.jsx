import { useOutletContext } from 'react-router-dom';

import { CustomRadio } from 'components';
import img from 'assets/img/steps/vaccine.png';

const Vaccine = () => {
  const { register, errors, watch } = useOutletContext();

  const vaccine = watch('vaccine');
  const vaccineState = watch('vaccine-state');
  const vaccinePlanning = watch('vaccine-planning');

  return (
    <>
      <form>
        <CustomRadio
          question='უკვე აცრილი ხარ?'
          radios={[
            { label: 'კი', id: 'vaccine-yes' },
            { label: 'არა', id: 'vaccine-no' },
          ]}
          register={{
            ...register('vaccine', {
              required: 'ველი სავალდებულოა',
            }),
          }}
          required='true'
          error={errors?.vaccine?.message}
        />
        {vaccine === 'vaccine-yes' ? (
          <CustomRadio
            question='აირჩიე რა ეტაპზე ხარ'
            radios={[
              {
                label: 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
                id: 'vaccine-half-yes',
              },
              { label: 'სრულიად აცრილი ვარ', id: 'vaccine-full' },
              {
                label: 'პირველი დოზა და არ ვარ დარეგისტრირებული მეორეზე',
                id: 'vaccine-half-no',
              },
            ]}
            register={{
              ...register('vaccine-state', {
                required: 'ველი სავალდებულოა',
              }),
            }}
            required='true'
            error={errors['vaccine-state']?.message}
          />
        ) : (
          ''
        )}
        {vaccine === 'vaccine-yes' && vaccineState === 'vaccine-half-no' ? (
          <p className='pl-16 py-5 font-bold max-w-md'>
            რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი{' '}
            <a
              href='https://booking.moh.gov.ge/'
              target='_blank'
              rel='noreferrer'
              className='text-[#1289AE]'
            >
              https://booking.moh.gov.ge/
            </a>
          </p>
        ) : (
          ''
        )}
        {vaccine === 'vaccine-no' ? (
          <CustomRadio
            question='რას ელოდები'
            radios={[
              {
                label: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                id: 'vaccine-registered',
              },
              { label: 'არ ვგეგმავ', id: 'vaccine-not-registered' },
              {
                label: 'გადატანილი მაქვს და ვგეგმავ აცრას',
                id: 'vaccine-covid-contact-planning',
              },
            ]}
            register={{
              ...register('vaccine-planning', {
                required: 'ველი სავალდებულოა',
              }),
            }}
            required='true'
            error={errors['vaccine-planning']?.message}
          />
        ) : (
          ''
        )}
        {vaccine === 'vaccine-no' &&
        vaccinePlanning === 'vaccine-covid-contact-planning' ? (
          <div className='pl-16 py-5 font-bold max-w-md'>
            <p>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
            </p>
            <p className='pt-5'>
              👉 რეგისტრაციის ბმული{' '}
              <a
                href='https://booking.moh.gov.ge/'
                target='_blank'
                rel='noreferrer'
                className='text-[#1289AE]'
              >
                https://booking.moh.gov.ge/
              </a>
            </p>
          </div>
        ) : (
          ''
        )}
      </form>
      <div>
        <img src={img} alt='vaccine' className='max-h-150'></img>
      </div>
    </>
  );
};

export default Vaccine;
