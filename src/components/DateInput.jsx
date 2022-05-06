import { useState } from 'react';

import { AnimatedDiv } from 'components';

const DateInput = (props) => {
  const [enteredDate, setEnteredDate] = useState('');

  const checkValue = (str, max) => {
    if (str.charAt(0) !== '0' || str === '00') {
      var num = parseInt(str);
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length === 1
          ? '0' + num
          : num.toString();
    }
    return str;
  };

  const inputHandler = (e) => {
    var input = e.target.value;
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[1]) values[1] = checkValue(values[1], 12);
    var output = values.map(function (v, i) {
      return v.length === 2 && i < 2 ? v + '/' : v;
    });
    setEnteredDate(output.join('').substr(0, 10));
  };

  const blurHandler = (e) => {
    var input = e.target.value;
    var values = input.split('/').map(function (v, i) {
      return v.replace(/\D/g, '');
    });
    var output = '';

    if (values.length === 3) {
      var year =
        values[2].length !== 4
          ? parseInt(values[2]) + 2000
          : parseInt(values[2]);
      var month = parseInt(values[0]) - 1;
      var day = parseInt(values[1]);
      var d = new Date(year, month, day);
      if (!isNaN(d)) {
        var dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];
        output = dates
          .map(function (v) {
            v = v.toString();
            return v.length === 1 ? '0' + v : v;
          })
          .join('/');
      }
    }
    setEnteredDate(output);
  };

  return (
    <div className={`relative py-3 max-w-xl flex flex-col`}>
      <input
        type={props.type}
        id={props.id}
        {...props.register}
        value={enteredDate}
        placeholder={props.placeholder}
        onInput={inputHandler}
        onBlur={blurHandler}
        className='ml-5 max-w-lg h-12 px-5 font-main text-lg text-custom-black bg-transparent border border-solid border-custom-black outline-none'
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

export default DateInput;
