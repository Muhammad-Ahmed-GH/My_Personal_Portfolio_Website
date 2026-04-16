import clsx from "clsx";
import { navLinks } from "../data/links";

type Props = {
  isMenuOpen: boolean;
};

export default function HeaderLinks(props: Props) {
  return (
    <ul
      className={clsx(
        "flex flex-col absolute left-0 top-full w-full max-h-0 overflow-hidden bg-header-link transition-[max-height] duration-[var(--main-transition)] md:flex-row md:gap-[10px] md:static md:bg-transparent md:w-auto md:max-h-[initial] md:h-full md:overflow-visible xl:gap-[20px] ",
        props.isMenuOpen && "max-h-[300px]",
      )}
    >
      {navLinks.map((navLink) => (
        <li key={navLink.href}>
          <a
            className="block capitalize text-text p-[15px] font-light transition-all duration-[var(--main-transition)] md:px-[10px] md:font-medium md:flex md:items-center md:h-header-h xl:p-[0_15px] hover:text-primary hover:bg-header-link-hover md:hover:bg-transparent "
            href={navLink.href}
          >
            {navLink.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

/*

*/
