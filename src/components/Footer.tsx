import { socialMediaLinks } from "../data/links";
import Container from "./UI/Container";

export default function Footer() {
  return (
    <div className="min-h-[100px] pt-section-p pb-[50px] text-text bg-section text-[1.15em] text-center sm:text-start">
      <Container className="flex flex-col justify-between items-center gap-[10px] sm:flex-row sm:gap-0 ">
        <p>
          Copyright {new Date().getFullYear()} @<strong>Muhammad Ahmed</strong>
        </p>

        <div className="flex justify-center md:justify-start">
          {socialMediaLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              title={link.name}
              target="_blank"
              rel="noopener"
              className="p-[10px_15px] text-text text-[1.1em] transition-transform duration-[var(--main-transition)] hover:transform-[translateY(-3px)]"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
