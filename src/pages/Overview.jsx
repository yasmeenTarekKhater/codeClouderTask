import React from "react";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";

import print from "../assets/icons/fi-rr-print.png";
import CustomButton from "../components/ui/Button";

import './css/Overview.css';


const Overview = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-between">
        <h3 className="col-2">Overview</h3>
        <CustomButton customClass="col-1 printButton">
          <img src={print} alt='print' className="me-2"/>
          Print
        </CustomButton>
      </Row>
    </Container>
  );
};

export default Overview;
