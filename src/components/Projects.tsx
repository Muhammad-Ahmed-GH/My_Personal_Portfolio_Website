import { pageData } from "../data/pageData";
import ProjectCard from "./ProjectCard";
import Cards from "./UI/Cards";
import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";

export default function Projects() {
  const projectsData = pageData.projects;

  return (
    <section id="projects">
      <Container className="">
        <SectionTitle>Projects</SectionTitle>
        <Cards>
          {projectsData.map((projectData) => (
            <ProjectCard
              key={projectData.id}
              icon={projectData.icon}
              title={projectData.title}
              githubRepo={projectData.links.github}
              liveDemo={projectData.links.live}
              status={projectData.status}
              techStack={projectData.techStack}
            />
          ))}
        </Cards>
      </Container>
    </section>
  );
}
