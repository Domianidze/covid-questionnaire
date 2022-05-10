const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.className} w-44 h-14 font-main text-lg text-white font-bold bg-[#208298] rounded-[42px]`}
      datatestid={props.datatestid}
    >
      {props.value}
    </button>
  );
};

export default Button;
