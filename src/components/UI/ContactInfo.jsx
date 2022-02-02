import React from "react";

import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ContactInfo.module.scss";

function ContactInfo() {
  return (
    <Col lg={4}>
      <div className="d-flex mb-5 align-items-center">
        <div className="me-3">
          <FontAwesomeIcon icon="map-marked-alt" className="fs-4" />
        </div>

        <div>
          <h3 className={`${styles.infoHeading} mb-0`}>
            Buttonwood, California.
          </h3>
          <p className={`${styles.infoText} mb-0`}>Rosemead, CA 91770</p>
        </div>
      </div>

      <div className="d-flex mb-5 align-items-center">
        <div className="me-3">
          <FontAwesomeIcon icon="phone-square" className="fs-4" />
        </div>
        <div>
          <h3 className={`${styles.infoHeading} mb-0`}>00 (440) 7876 447</h3>
          <p className={`${styles.infoText} mb-0`}>Mon to Fri 9am to 6pm</p>
        </div>
      </div>

      <div className="d-flex mb-5 align-items-center">
        <div className="me-3">
          <FontAwesomeIcon icon="envelope" className="fs-4" />
        </div>
        <div>
          <h3 className={`${styles.infoHeading} mb-0`}>support@shophere.com</h3>
          <p className={`${styles.infoText} mb-0`}>
            Send us your query anytime!
          </p>
        </div>
      </div>
    </Col>
  );
}

export default ContactInfo;
