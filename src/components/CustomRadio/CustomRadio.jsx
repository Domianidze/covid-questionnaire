import classes from './CustomRadio.module.css';

import { AnimatedDiv } from 'components';

const CustomRadio = (props) => {
  return (
    <AnimatedDiv className='relative py-5 flex flex-col'>
      <p className='py-2 max-w-xl text-xl font-bold'>{`${props.question}${
        props.required ? '*' : ''
      }`}</p>
      {props.radios.map((radio) => {
        return (
          <div key={radio.id} className='py-2 pl-5'>
            <input
              type='radio'
              id={radio.id}
              {...props.register}
              value={radio.id}
              className={classes['custom-radio']}
            ></input>
            <label htmlFor={radio.id}>{radio.label}</label>
          </div>
        );
      })}
      {props.error && (
        <AnimatedDiv>
          <p className='absolute bottom-[-5px] pl-5 text-[15px] text-[#F15524]'>
            {props.error}
          </p>
        </AnimatedDiv>
      )}
    </AnimatedDiv>
  );
};

export default CustomRadio;
