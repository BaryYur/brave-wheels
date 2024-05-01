import { useEffect, useState } from "react";

import { breakpoints } from "../theme";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const useBreakpoint = () => {
  const size = useWindowSize();

  const [breakpoint, setBreakpoint] = useState(1400);

  useEffect(() => {
    if (size.width <= breakpoints.phone) {
      setBreakpoint(breakpoints.smallPhone);
    } else if (size.width <= breakpoints.tablet) {
      setBreakpoint(breakpoints.phone);
    } else if (size.width <= breakpoints.smallLaptop) {
      setBreakpoint(breakpoints.tablet);
    } else if (size.width <= breakpoints.laptop) {
      setBreakpoint(breakpoints.smallLaptop);
    } else if (size.width <= breakpoints.bigScreen) {
      setBreakpoint(breakpoints.laptop);
    } else {
      setBreakpoint(breakpoints.bigScreen);
    }
  }, [size.width]);

  return breakpoint;
};
