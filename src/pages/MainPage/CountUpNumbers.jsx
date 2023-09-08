import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUpNumbers = ({ start, end, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(start);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when it enters the viewport
    threshold: 0.1, // 10% of the element visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        if (progress < 1) {
          setCount(Math.floor(start + progress * (end - start)));
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, start, end, duration]);

  return (
    <div ref={ref}>
      {isVisible && <span>{count}</span>}
    </div>
  );
};

export default CountUpNumbers;
