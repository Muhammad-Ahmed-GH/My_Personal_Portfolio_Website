import { useState } from "react";
import { resumeLink } from "../data/links";
import BurgerButton from "./UI/BurgerButton";
import HeaderLinks from "./HeaderLinks";
import Container from "./UI/Container";
import MainButton from "./UI/MainButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed z-[1000] bg-section shadow-[0_0_5px_var(--color-shadow)] ">
      <Container className="flex justify-between items-center h-header-h ">
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
          <MainButton href={resumeLink} target="_blank" rel="noopener">
            View My Resume
          </MainButton>
        </nav>
      </Container>
    </header>
  );
}
