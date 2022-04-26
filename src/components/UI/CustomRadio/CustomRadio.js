import classes from './CustomRadio.module.css';

const CustomRadio = (props) => {
  return (
    <div className='relative py-5 flex flex-col'>
      <p className='py-2 max-w-xl text-xl font-bold'>{`${props.question}${
        props.required ? '*' : ''
      }`}</p>
      {props.radios.map((radio) => {
        return (
          <div key={radio.id} className='py-2 pl-5'>
            <input
              type='radio'
              id={radio.id}
              name={props.name}
              value={radio.id}
              className={classes['custom-radio']}
            ></input>
            <label htmlFor={radio.id}>{radio.label}</label>
          </div>
        );
      })}
      {props.error && (
        <p className='absolute bottom-[-5px] pl-5 text-[15px] text-[#F15524]'>
          {props.error}
        </p>
      )}
    </div>
  );
};

export default CustomRadio;
