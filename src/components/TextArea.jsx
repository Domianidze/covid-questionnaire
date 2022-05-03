import { AnimatedDiv } from 'components';

const TextArea = (props) => {
  return (
    <div className='py-5 flex flex-col'>
      <label htmlFor={props.id} className='pb-3 max-w-md text-xl font-bold'>{`${
        props.question
      }${props.required ? '*' : ''}`}</label>
      <textarea
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className='w-150 h-44 p-5 font-main text-lg text-background bg-transparent border border-background border-solid resize-none'
      ></textarea>
      {props.error && (
        <AnimatedDiv>
          <p className='absolute bottom-[-5px] pl-5 text-[15px] text-[#F15524]'>
            {props.error}
          </p>
        </AnimatedDiv>
      )}
    </div>
  );
};

export default TextArea;
