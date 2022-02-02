import { useSelector } from "react-redux";

import AuthForm from "../form/AuthForm";
import UserProfile from "./UserProfile";
import Section from "../UI/Section";
import PageHeading from "../UI/PageHeading";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Auth() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <PageHeading title="Welcome!">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim!
        </p>
      </PageHeading>
      <Section>
        <Row className={!isLoggedIn && "justify-content-center"}>
          <Col lg={6} md={8}>
            {isLoggedIn ? <UserProfile /> : <AuthForm />}
          </Col>
        </Row>
      </Section>
    </>
  );
}

export default Auth;
