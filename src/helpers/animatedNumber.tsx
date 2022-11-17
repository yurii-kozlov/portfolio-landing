/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { useSpring, animated } from 'react-spring';

type Props = {
  n: number
};

export const AnimatedNumber: React.FC<Props> = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};
