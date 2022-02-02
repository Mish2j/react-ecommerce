import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { authActions } from "../../store/auth-slice";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function UserProfile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    setIsLoading(true);
    dispatch(authActions.logout());
    setIsLoading(false);
  };

  useEffect(() => {
    navigate("?user_profile=username", { replace: true });
    return () => {
      navigate;
    };
  }, [location.search]);

  return (
    <>
      <h2 className="mb-5">Your Profile</h2>

      <Col className="mb-5">
        <Link to="/shopping-cart">View my shopping cart</Link>
      </Col>

      <Button variant="light" onClick={logoutHandler}>
        {isLoading ? "Loading..." : "logout"}
      </Button>
    </>
  );
}

export default UserProfile;
