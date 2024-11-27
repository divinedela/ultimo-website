import { useEffect, useState } from "react";

const useHorizontalScrollPercentage = (elementId: string) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const element = document.getElementById(elementId);

    const handleScroll = () => {
      const pos = getHorizontalScrollPercentage();
      setScrollPercentage(Math.round(pos));
    };

    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    // Cleanup listener on component unmount
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [elementId]);

  const getHorizontalScrollPercentage = () => {
    const element = document.getElementById(elementId);
    if (!element) return 0;

    const scrollLeft = element.scrollLeft;
    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;
    return (scrollLeft / (scrollWidth - clientWidth)) * 100;
  };

  const scrollToPercentage = (percentage: number) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;
    const targetScrollLeft = (percentage / 100) * (scrollWidth - clientWidth);

    element.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth", // Smooth scroll
    });
  };

  return { scrollPercentage, scrollToPercentage };
};

export default useHorizontalScrollPercentage;
