/*
  <header>
    <div class="container">
      <h1 class="logo">
        <a href="#main">muhammad ahmed</a>
      </h1>

      <nav>
        <div class="links">
          <div class="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
          </ul>
        </div>
        <a
          href="#"
          class="main-btn resume-link"
          target="_blank"
          rel="noopener"
          >View My Resume</a
        >
      </nav>
    </div>
  </header>


*/

import { useState } from "react";
import { resumeLink } from "../data/links";
import BurgerButton from "./BurgerButton";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed z-[1000] bg-section shadow-[0_0_5px_var(--color-shadow)] ">
      <div className="container mx-auto px-4 flex justify-between items-center h-header-h ">
        <h1 className="text-primary hover:text-primary-dark font-[600] md:text-[1.8em] text-[1.5rem] uppercase transition-colors duration-[var(--main-transition)] ">
          <a href="#main">Muhammad Ahmed</a>
        </h1>
        <nav className="flex items-center gap-[20px] xl:gap-[50px]">
          <div>
            <BurgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <HeaderLinks isMenuOpen={isMenuOpen} />
          </div>
          <a href={resumeLink} target="_blank" rel="noopener">
            View My Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
