import React, { useState } from 'react';

const NavContext = React.createContext({
  curSlide: 0,
  totalSlides: 0,
  onNextSlide: () => {},
  onPrevSlide: () => {},
});

export const NavContextProvider = (props) => {
  const [curSlide, setCurSlide] = useState(0);
  const totalSlides = 6;

  const nextSlideHandler = () => {
    setCurSlide((prevState) => {
      if (prevState === totalSlides) return;
      return prevState + 1;
    });
  };

  const prevSlideHandler = () => {
    setCurSlide((prevState) => {
      if (prevState === 0) return;
      return prevState - 1;
    });
  };

  return (
    <NavContext.Provider
      value={{
        curSlide: curSlide,
        totalSlides: totalSlides,
        onNextSlide: nextSlideHandler,
        onPrevSlide: prevSlideHandler,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
