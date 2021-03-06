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
        className='w-[625px] h-[185px] p-5 font-main text-lg text-background bg-transparent border border-background border-solid resize-none'
      ></textarea>
    </div>
  );
};

export default TextArea;
