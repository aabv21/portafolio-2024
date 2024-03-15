import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    // listen scroll event
    window.addEventListener("scroll", updateScrollCompletion, {
      passive: true,
    });

    // remove event on unmount to prevent a memory leak with the cleanup
    return () =>
      window.removeEventListener("scroll", updateScrollCompletion, {
        passive: true,
      });
  }, []);

  return completion;
};

export default useScrollProgress;
