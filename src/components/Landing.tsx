import { resumeLink, socialMediaLinks } from "../data/links";
import AltButton from "./UI/AltButton";
import Container from "./UI/Container";
import MainButton from "./UI/MainButton";

export default function Landing() {
  return (
    <section
      id="main"
      className="p-0 min-h-auto text-center text-[1em] md:text-start"
    >
      <Container className="container px-4 mx-auto 2xl:max-w-[73rem] pt-header-h min-h-screen flex flex-col justify-center">
        <p className="text-primary text-[1em] font-light uppercase sm:text-[1.2em]">
          Hey there, thanks for passing by
          <span className="block m-[20px_0_30px] text-heading [text-transform:none] font-rufina font-bold text-[3em] mt-[15px] leading-[1.1] md:mt-[20px] md:leading-[inherit]">
            I'm Muhammad
            <br />
            Frontend Developer
          </span>
        </p>

        <p className="text-[1.1em] mb-[30px] max-w-[650px] text-text-light leading-[1.5] ">
          I'm an aspiring web developer, and a computer science student
        </p>

        <div className="flex flex-col items-center gap-[20px] mb-[20px] md:flex-row">
          <MainButton href="#projects">View my work</MainButton>
          <AltButton href={resumeLink} target="_blank" rel="noopener">
            My resume
          </AltButton>
        </div>

        <div className="flex justify-center md:justify-start">
          {socialMediaLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              title={link.name}
              target="_blank"
              rel="noopener"
              className="p-[10px_15px] text-text-light text-[1.4em] transition-transform duration-[var(--main-transition)] hover:transform-[translateY(-3px)]"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
