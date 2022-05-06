import { AnimatedDiv } from 'components';

const Input = (props) => {
  return (
    <div
      className={`relative ${
        props.label ? 'py-5' : 'py-3'
      } max-w-xl flex flex-col`}
    >
      {props.label ? (
        <label htmlFor={props.id} className='pb-3 text-xl font-bold'>{`${
          props.label
        }${props.required ? '*' : ''}`}</label>
      ) : (
        ''
      )}
      <input
        type={props.type}
        id={props.id}
        {...props.register}
        placeholder={props.placeholder}
        defaultValue={props.value}
        className={`${props.className} form-input  max-w-lg h-12 px-5 font-main text-lg text-custom-black bg-transparent border border-solid border-custom-black focus:ring-0 focus:border-custom-black`}
      />
      {props.error && (
        <AnimatedDiv>
          <p
            className={`absolute ${
              props.label ? 'bottom-[-5px] pl-5' : 'bottom-[-10px] pl-10'
            } text-[15px] text-[#F15524] whitespace-nowrap`}
          >
            {props.error}
          </p>
        </AnimatedDiv>
      )}
    </div>
  );
};

export default Input;
