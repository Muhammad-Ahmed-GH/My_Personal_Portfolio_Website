import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

function BurgerBar(props: { isMenuOpen: boolean }) {
  return (
    <span
      className={clsx(
        "block h-[3px] rounded-full transition-[background-color_opacity] duration-[var(--main-transition)]",
        props.isMenuOpen
          ? "bg-primary-light first:transform-[translateY(calc(3px+5px))_rotate(45deg)] nth-[2]:opacity-0 last:transform-[translateY(calc(-3px-5px))_rotate(-45deg)]"
          : "bg-text",
      )}
    ></span>
  );
}

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function BurgerButton(props: Props) {
  return (
    <div
      className="flex flex-col justify-center gap-[5px] w-[25px] cursor-pointer md:hidden"
      onClick={() => props.setIsMenuOpen((prev) => !prev)}
    >
      <BurgerBar isMenuOpen={props.isMenuOpen} />
      <BurgerBar isMenuOpen={props.isMenuOpen} />
      <BurgerBar isMenuOpen={props.isMenuOpen} />
    </div>
  );
}
