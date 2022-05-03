import { motion } from 'framer-motion';

import { ANIMATION_TIME_SEC } from 'config';

const AnimatedDiv = (props) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      className={props.className}
      timeout={ANIMATION_TIME_SEC * 1000}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedDiv;
