import { useState } from "react";
import { resumeLink } from "../data/links";
import BurgerButton from "./BurgerButton";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed z-[1000] bg-section shadow-[0_0_5px_var(--color-shadow)] ">
      <div className="container mx-auto px-4 2xl:max-w-[73rem] flex justify-between items-center h-header-h ">
        <h1 className="text-primary hover:text-primary-dark font-[600] md:text-[1.8em] text-[1.5rem] uppercase transition-colors duration-[var(--main-transition)] ">
          <a href="#main">Muhammad Ahmed</a>
        </h1>
        <nav className="flex items-center gap-[20px] xl:gap-[50px]">
          <div>
            <BurgerButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <HeaderLinks isMenuOpen={isMenuOpen} />
          </div>
          <a
            className="hidden px-[25px] py-[18px] w-[200px] rounded-[var(--spacing-border-r)] relative z-0 font-medium text-center capitalize text-white bg-primary overflow-hidden lg:block before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0 before:-z-1 before:bg-primary-dark before:transition-[width] before:ease-[cubic-bezier(0.47,1.8,0.17,0.53)] before:duration-700 hover:before:w-full "
            href={resumeLink}
            target="_blank"
            rel="noopener"
          >
            View My Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
