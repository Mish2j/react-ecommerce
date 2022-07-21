import { memo, useMemo } from "react";

import FooterBottom from "./FooterBottom";
import FooterForm from "./FooterForm";
import LinkColumn from "./LinkColumn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./Footer.module.scss";

const Footer = memo(() => {
  const footerLinks = {
    titles: ["Top Products", "Quick Links", "Features", "Resources"],
    links: [
      [
        "Managed Website",
        "Manage Reputation",
        "Power Tools",
        "Marketing Service",
      ],
      ["Jobs", "Brand Assets", "Investor Relations", "Terms of Service"],
      ["Jobs", "Brand Assets", "Investor Relations", "Terms of Service"],
      ["Guides", "Research", "Experts", "Agencies"],
    ],
  };

  const links = footerLinks.titles.map((title, i) => {
    return (
      <LinkColumn key={title} title={title} links={footerLinks.links[i]} />
    );
  });

  return (
    <footer className={`${styles.footer} bg-dark`}>
      <Container>
        <Row className="mb-5">
          {links}
          <FooterForm />
        </Row>
        <FooterBottom />
      </Container>
    </footer>
  );
});

export default Footer;
