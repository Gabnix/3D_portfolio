import React, { useEffect, useState } from "react";

const Typewriter = ({ words = [], typingSpeed = 100, deletingSpeed = 50, pause = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const handle = setInterval(() => {
      setBlink((b) => !b);
    }, 500);
    return () => clearInterval(handle);
  }, []);

  useEffect(() => {
    if (words.length === 0) return;

    if (!isDeleting && subIndex === words[index].length) {
      // pause at end
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span aria-live="polite" className="typewriter inline-flex items-center">
      <span className="typewriter-text">
        {words.length ? words[index].substring(0, subIndex) : ""}
      </span>
      <span
        className="typewriter-cursor ml-1"
        style={{
          width: 8,
          height: 18,
          display: "inline-block",
          background: blink ? "currentColor" : "transparent",
        }}
      />
    </span>
  );
};

export default Typewriter;

