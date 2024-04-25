import React from "react";
import Row from "react-bootstrap/Row";
import { AiOutlineRight } from "react-icons/ai";

const FromAndTo = ({ customClass }) => {
  return (
    <div className={customClass}>
      <div className="container text-start">
        <Row className="justify-content-between">
          <p className="col-3 fromtext">From</p>
          <p className="col-7 ">from coin</p>
          <span className="col-1">
            <AiOutlineRight color="gray" />
          </span>
        </Row>
      </div>

      <div className="container text-start">
        <Row className="justify-content-between">
          <p className="col-3 totext">To</p>
          <p className="col-7 ">To coin</p>
          <span className="col-1">
            <AiOutlineRight color="gray" />
          </span>
        </Row>
      </div>
    </div>
  );
};

export default FromAndTo;
