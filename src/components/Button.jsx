const Button = (props) => {
  const className = `w-44 h-14 font-main text-lg text-white font-bold bg-[#208298] rounded-[42px] ${props.className}`;

  return (
    <button type={props.type} onClick={props.onClick} className={className} dataTestId={props.dataTestId}>
      {props.value}
    </button>
  );
};

export default Button;
