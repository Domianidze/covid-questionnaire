import { useOutletContext } from 'react-router-dom';

import { AnimatedDiv, CustomRadio } from 'components';
import img from 'assets/img/steps/vaccine.png';

const Vaccine = () => {
  const { register, errors, watch } = useOutletContext();

  const vaccine = watch('vaccine');
  const vaccineState = watch('vaccine-state');
  const vaccinePlanning = watch('vaccine-planning');

  return (
    <AnimatedDiv className='w-full h-auto flex justify-between'>
      <form className='w-1/2 pr-5'>
        <CustomRadio
          question='უკვე აცრილი ხარ?'
          radios={[
            { label: 'კი', id: 'vaccine-yes' },
            { label: 'არა', id: 'vaccine-no' },
          ]}
          register={{
            ...register('vaccine', {
              required: 'ვაქცინის ველი სავალდებულოა',
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
                id: 'first_dosage_and_registered_on_the_second',
              },
              { label: 'სრულიად აცრილი ვარ', id: 'fully_vaccinated' },
              {
                label: 'პირველი დოზა და არ ვარ დარეგისტრირებული მეორეზე',
                id: 'first_dosage_and_not_registered_yet',
              },
            ]}
            register={{
              ...register('vaccine-state', {
                required: 'ვაქცინის ეტაპის ველი სავალდებულოა',
              }),
            }}
            required='true'
            error={errors['vaccine-state']?.message}
          />
        ) : (
          ''
        )}
        {vaccine === 'vaccine-yes' &&
        vaccineState === 'first_dosage_and_not_registered_yet' ? (
          <AnimatedDiv>
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
          </AnimatedDiv>
        ) : (
          ''
        )}
        {vaccine === 'vaccine-no' ? (
          <CustomRadio
            question='რას ელოდები'
            radios={[
              {
                label: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                id: 'registered_and_waiting',
              },
              { label: 'არ ვგეგმავ', id: 'not_planning' },
              {
                label: 'გადატანილი მაქვს და ვგეგმავ აცრას',
                id: 'had_covid_and_planning_to_be_vaccinated',
              },
            ]}
            register={{
              ...register('vaccine-planning', {
                required: 'ვაქცინის გეგმის ველი სავალდებულოა',
              }),
            }}
            required='true'
            error={errors['vaccine-planning']?.message}
          />
        ) : (
          ''
        )}
        {vaccine === 'vaccine-no' &&
        vaccinePlanning === 'had_covid_and_planning_to_be_vaccinated' ? (
          <AnimatedDiv className='pl-16 py-5 font-bold max-w-md'>
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
          </AnimatedDiv>
        ) : (
          ''
        )}
      </form>
      <div className='w-1/2 pl-5'>
        <img src={img} alt='vaccine' className='pt-3 max-h-150'></img>
      </div>
    </AnimatedDiv>
  );
};

export default Vaccine;
