import { pageData } from "../data/pageData";
import SkillCard from "./SkillCard";
import Cards from "./UI/Cards";
import Container from "./UI/Container";
import SectionSubTitle from "./UI/SectionSubTitle";
import SectionTitle from "./UI/SectionTitle";

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SectionSubTitle>Languages</SectionSubTitle>
        <Cards>
          {pageData.skills.languages.map((skillData) => (
            <SkillCard
              key={skillData.id}
              icon={skillData.icon}
              title={skillData.name}
            />
          ))}
        </Cards>
        <SectionSubTitle className="mt-[50px]">Frameworks & Tools</SectionSubTitle>
        <Cards>
          {pageData.skills.frameworksAndTools.map((skillData) => (
            <SkillCard
              key={skillData.id}
              icon={skillData.icon}
              title={skillData.name}
            />
          ))}
        </Cards>
        <SectionSubTitle className="mt-[50px]">Others</SectionSubTitle>
        <Cards>
          {pageData.skills.others.map((skillData) => (
            <SkillCard
              key={skillData.id}
              icon={skillData.icon}
              title={skillData.name}
            />
          ))}
        </Cards>
      </Container>
    </section>
  );
}
