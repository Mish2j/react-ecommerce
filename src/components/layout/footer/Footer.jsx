import FooterBottom from "./FooterBottom";
import FooterForm from "./FooterForm";
import LinkColumn from "./LinkColumn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-dark`}>
      <Container>
        <Row className="mb-5">
          <LinkColumn
            title="Top Products"
            links={[
              "Managed Website",
              "Manage Reputation",
              "Power Tools",
              "Marketing Service",
            ]}
          />
          <LinkColumn
            title="Quick Links"
            links={[
              "Jobs",
              "Brand Assets",
              "Investor Relations",
              "Terms of Service",
            ]}
          />
          <LinkColumn
            title="Features"
            links={[
              "Jobs",
              "Brand Assets",
              "Investor Relations",
              "Terms of Service",
            ]}
          />
          <LinkColumn
            title="Resources"
            links={["Guides", "Research", "Experts", "Agencies"]}
          />
          <FooterForm />
        </Row>
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
