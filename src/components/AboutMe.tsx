import { pageData } from "../data/pageData";
import AboutMeCard from "./AboutMeCard";
import Cards from "./UI/Cards";
import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";

export default function AboutMe() {
  return (
    <section className="wavy" id="about-me">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Cards>
          {pageData.aboutMe.map((cardData) => (
            <AboutMeCard
              key={cardData.id}
              icon={cardData.icon}
              title={cardData.title}
              text={cardData.text}
            />
          ))}
        </Cards>
      </Container>
    </section>
  );
}
