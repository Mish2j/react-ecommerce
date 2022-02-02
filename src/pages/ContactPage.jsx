import ContactForm from "../components/form/ContactForm";
import ContactInfo from "../components/UI/ContactInfo";

import Section from "../components/UI/Section";
import Row from "react-bootstrap/Row";
import PageHeading from "../components/UI/PageHeading";

const ContactPage = () => {
  return (
    <>
      <PageHeading title="Contact Us">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PageHeading>
      <Section>
        <Row className="align-items-center">
          <ContactForm />
          <ContactInfo />
        </Row>
      </Section>
    </>
  );
};

export default ContactPage;
