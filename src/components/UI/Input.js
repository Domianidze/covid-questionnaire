const Input = (props) => {
  const inputClasses = `${props.className} w-130 h-12 px-5 font-main text-lg text-background bg-transparent border border-solid border-background'`;

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
        name={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className={inputClasses}
      />
      {props.error && (
        <p
          className={`absolute ${
            props.label ? 'bottom-[-5px] pl-5' : 'bottom-[-10px] pl-10'
          } text-[15px] text-[#F15524]`}
        >
          {props.error}
        </p>
      )}
    </div>
  );
};

export default Input;
