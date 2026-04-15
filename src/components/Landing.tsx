import { resumeLink, socialMediaLinks } from "../data/links";

export default function Landing() {
  return (
    /*
      section.landing#main
        .container
          p.greeting
            Hey there, thanks for passing by
            <span>I'm Muhammad<br />Frontend Developer</span>
          
          p.desc
            I'm an aspiring web developer, and a computer science student
          
          .landing-btns
            a.main-btn href="#projects"
              View my work
            
            a.alt-btn.resume-link href="#" target="_blank" rel="noopener"
              My resume
          
          .social-icons
     */
    <section
      id="main"
      className="text-text text-center text-[14px] md:text-[1rem] md:text-start bg-section-alt"
    >
      <div className="container px-4 mx-auto 2xl:max-w-[73rem] pt-header-h min-h-screen flex flex-col justify-center">
        <p className="text-primary text-[1.1em] font-light uppercase sm:text-[1.2em]">
          Hey there, thanks for passing by
          <span className="block m-[20px_0_30px] text-heading [text-transform:none] font-rufina font-bold text-[2.3em] mt-[15px] leading-[1.1] md:mt-[20px] md:leading-[inherit] sm:text-[3em]">
            I'm Muhammad
            <br />
            Frontend Developer
          </span>
        </p>

        <p className="text-[1em] mb-[30px] max-w-[650px] text-text-light leading-[1.5] sm:text-[1.1em]">
          I'm an aspiring web developer, and a computer science student
        </p>

        <div className="flex flex-col items-center gap-[20px] mb-[20px] md:flex-row">
          <a
            href="#projects"
            className="rounded-[var(--spacing-border-r)] w-[200px] z-0 font-medium text-center relative capitalize text-white p-[18px_0] bg-primary overflow-hidden before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0 before:bg-primary-dark before:-z-1 hover:before:w-full before:transition-[width] before:duration-700 before:ease-[cubic-bezier(0.47,1.8,0.17,0.53)]"
          >
            View my work
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener"
            className="rounded-[var(--spacing-border-r)] w-[200px] z-0 font-medium text-center relative capitalize text-text-light p-[18px_0] bg-none overflow-hidden transition-colors duration-700 border-1 border-primary hover:text-white before:absolute before:top-0 before:left-0 before:right-0 before:h-0 before:bg-primary before:-z-1 hover:before:h-full before:transition-[height] before:duration-700 before:ease-[cubic-bezier(0.47,1.8,0.17,0.53)]"
          >
            My resume
          </a>
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
      </div>
    </section>
  );
}
