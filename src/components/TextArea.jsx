const TextArea = (props) => {
  return (
    <div className='py-5 flex flex-col'>
      <label htmlFor={props.id} className='pb-3 max-w-md text-xl font-bold'>{props.question}</label>
      <textarea
        id={props.id}
        {...props.register}
        placeholder={props.placeholder}
        value={props.value}
        className='w-150 h-44 p-5 font-main text-lg text-background bg-transparent border border-background border-solid resize-none'
      ></textarea>
    </div>
  );
};

export default TextArea;
