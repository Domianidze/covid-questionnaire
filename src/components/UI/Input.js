const Input = (props) => {
  return (
    <div className='relative py-5 flex flex-col'>
      <label for={props.id} className='pb-3 text-xl font-bold'>{`${
        props.label
      }${props.required && '*'}`}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        className='w-[515px] h-12 px-5 text-lg text-background bg-transparent border border-solid border-background'
      />
      {props.error && (
        <p className='absolute bottom-[-5px] pl-5 text-[15px] text-[#F15524]'>
          {props.error}
        </p>
      )}
    </div>
  );
};

export default Input;
