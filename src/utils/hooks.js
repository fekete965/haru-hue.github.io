import React from "react";

export const useNavObserver = (section, setSectionInView, observerOptions) => {
  const elementRef = React.useRef(null);
  const aboutElRef = React.useCallback(
    (node) => {
      if (elementRef.current) elementRef.current.disconnect();

      elementRef.current = new IntersectionObserver(
        (entries, observerOptions) => {
          if (!entries[0]?.isIntersecting) {
            setSectionInView(null);
          } else {
            setSectionInView(section);
          }
        },
        observerOptions
      );
      if (node) {
        elementRef.current.observe(node);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [section]
  );

  return aboutElRef;
};
