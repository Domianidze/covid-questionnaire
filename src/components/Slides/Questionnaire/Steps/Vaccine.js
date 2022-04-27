import CustomRadio from 'components/UI/CustomRadio/CustomRadio';
import img from 'assets/img/steps/vaccine.png';

const Vaccine = () => {
  return (
    <>
      <form>
        <CustomRadio
          question='უკვე აცრილი ხარ?'
          radios={[
            { label: 'კი', id: 'vaccine-yes' },
            { label: 'არა', id: 'vaccine-no' },
          ]}
          name='vaccine'
          required='true'
        />
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
          name='vaccine–state'
          required='true'
        />
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
          name='vaccine–planning'
          required='true'
        />
        {/* 
            ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. 👉 რეგისტრაციის ბმული https://booking.moh.gov.ge/
        */}
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
      </form>
      <div>
        <img src={img} alt='vaccine' className='h-150'></img>
      </div>
    </>
  );
};

export default Vaccine;
