import { useOutletContext } from 'react-router-dom';

import { AnimatedDiv, CustomRadio, TextArea, Button } from 'components';
import img from 'assets/img/steps/tips.png';

const Tips = () => {
  const { register, errors, isValid, bindedHandleSubmit } = useOutletContext();

  const submitHandler = (e) => {
    e.preventDefault();
    bindedHandleSubmit()();
  };

  return (
    <AnimatedDiv className='w-full h-5/6 flex justify-between'>
      <form className='w-1/2 mr-24 h-full  overflow-auto'>
        <div className='max-w-xl py-5 text-xl'>
          <p>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p className='pt-5'>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <CustomRadio
          question='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?'
          radios={[
            { label: 'კვირაში ორჯერ', id: 'twice_a_week' },
            { label: 'კვირაში ერთხელ', id: 'once_a_week' },
            { label: 'ორ კვირაში ერთხელ', id: 'once_in_a_two_weeks' },
            { label: 'თვეში ერთხელ', id: 'once_in_a_month' },
          ]}
          register={{
            ...register('meeting-amount', {
              required: 'შეხვედრების ველი სავალდებულოა',
            }),
          }}
          required='true'
          error={errors['meeting-amount']?.message}
        />
        <CustomRadio
          question='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?'
          radios={[
            { label: '0', id: '0' },
            { label: '1', id: '1' },
            { label: '2', id: '2' },
            { label: '3', id: '3' },
            { label: '4', id: '4' },
            { label: '5', id: '5' },
          ]}
          register={{
            ...register('working-office-amount', {
              required: 'ოფისიდან მუშაობის ველი სავალდებულოა',
            }),
          }}
          required='true'
          error={errors['working-office-amount']?.message}
        />
        <TextArea
          question='რას ფიქრობ ფიზიკურ შეკრებებზე?'
          id='in-person-meeting'
          register={{
            ...register('in-person-meeting'),
          }}
        />
        <TextArea
          question='რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
          id='environment-opinion'
          register={{
            ...register('environment-opinion'),
          }}
        />
        <div className='w-150 flex justify-end'>
          <Button
            value='დასრულბა'
            onClick={submitHandler}
            className={!isValid && 'opacity-50 hover:opacity-40'}
          />
        </div>
      </form>
      <div className='w-1/2 pl-5'>
        <img src={img} alt='tips' className='pt-3 max-h-150'></img>
      </div>
    </AnimatedDiv>
  );
};

export default Tips;
