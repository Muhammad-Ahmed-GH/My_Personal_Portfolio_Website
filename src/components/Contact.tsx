import { pageData } from "../data/pageData";
import ContactCard from "./ContactCard";
import Cards from "./UI/Cards";
import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";

export default function Contact() {
  const contactData = pageData.contact;

  return (
    <section className="wavy" id="contact">
      <Container>
        <SectionTitle>Contact Me!</SectionTitle>
        <Cards>
          <ContactCard type="email" items={contactData.emails} />
          <ContactCard type="phone" items={contactData.phones} />
        </Cards>
      </Container>
    </section>
  );
}
