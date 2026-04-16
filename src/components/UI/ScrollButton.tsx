import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const handleClick = function () {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "w-[50px] h-[50px] flex justify-center items-center fixed right-[20px] bottom-[20px] rounded-full text-white bg-primary transition-[background_opacity] duration-[var(--main-transition)] hover:bg-primary-dark",
        visible ? "cursor-pointer" : "opacity-0 pointer-events-none"
      )}
      onClick={handleClick}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}
