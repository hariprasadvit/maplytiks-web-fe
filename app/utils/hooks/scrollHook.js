import { useRef, useEffect } from 'react';

let animationStarted = false;
export const useScrollOffsetAnimation = ({ offsetDiff }, reachCallback) => {
  const pathRef = useRef(null);
  // const [animate, setAnimate] = useState(false);
  const onScroll = () => {
    // console.log(
    //   window.innerHeight - pathRef.current.getBoundingClientRect().top,
    // );
    if (
      offsetDiff &&
      window.innerHeight - pathRef.current.getBoundingClientRect().top >
        offsetDiff &&
      !animationStarted
    ) {
      animationStarted = true;
      reachCallback();
      // setAnimate(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      animationStarted = false;
    };
  }, []);
  return [pathRef];
};
