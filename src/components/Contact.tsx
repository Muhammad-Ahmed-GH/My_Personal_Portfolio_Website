import { pageData } from "../data/pageData";
import ContactCard from "./ContactCard";
import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";

export default function Contact() {
  const contactData = pageData.contact;

  return (
    <section id="contact">
      <Container>
        <SectionTitle>Contact Me!</SectionTitle>
        <div className="flex flex-wrap justify-center gap-[50px]">
          <ContactCard type="email" items={contactData.emails} />
          <ContactCard type="phone" items={contactData.phones} />
        </div>
      </Container>
    </section>
  );
}
