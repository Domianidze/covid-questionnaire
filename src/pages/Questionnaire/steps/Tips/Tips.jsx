import { useNavigate } from 'react-router-dom';

import { CustomRadio, TextArea, Button } from 'components';
import img from 'assets/img/steps/tips.png';

const Tips = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/end');
    console.log('Subbmited');
  };

  return (
    <>
      <form>
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
            { label: 'კვირაში ორჯერ', id: 'week-twice' },
            { label: 'კვირაში ერთხელ', id: 'week-once' },
            { label: 'ორ კვირაში ერთხელ', id: 'two-weeks-once' },
            { label: 'თვეში ერთხელ', id: 'month-once' },
          ]}
          name='meeting-amount'
          required={true}
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
          name='working-office-amount'
          required={true}
        />
        <TextArea
          question='რას ფიქრობ ფიზიკურ შეკრებებზე?'
          id='in-person-meeting'
        />
        <TextArea
          question='რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
          id='environment-opinion'
        />
        <div className='w-full flex justify-end'>
          <Button value='დასრულბა' onClick={submitHandler} />
        </div>
      </form>
      <div>
        <img src={img} alt='tips' className='h-150'></img>
      </div>
    </>
  );
};

export default Tips;
