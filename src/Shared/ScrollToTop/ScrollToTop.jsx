import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const scrollElRef = useRef(null);

  useEffect(() => {
    // 🔍 FIND THE ACTUAL SCROLLING ELEMENT
    const candidates = [
      document.querySelector("[data-scroll-container]"),
      document.querySelector(".Container"),
      document.querySelector("main"),
      document.documentElement,
      document.body,
    ];

    const scrollEl = candidates.find(
      (el) => el && el.scrollHeight > el.clientHeight
    );

    if (!scrollEl) return;

    scrollElRef.current = scrollEl;

    const onScroll = () => {
      setShow(scrollEl.scrollTop > 300);
    };

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      scrollEl.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!show) return null;

  return createPortal(
    <button
      onClick={() => {
        const el = scrollElRef.current;
        if (el) {
          el.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 2147483647,
      }}
      className="
        h-12 w-12
        rounded-full
        bg-PrimaryColor-0
        text-white
        flex items-center justify-center
        shadow-2xl
        hover:bg-white
        hover:text-PrimaryColor-0
        transition-all
      "
      aria-label="Scroll to top"
    >
      <FaArrowUpLong size={22} />
    </button>,
    document.body
  );
};

export default ScrollToTop;
