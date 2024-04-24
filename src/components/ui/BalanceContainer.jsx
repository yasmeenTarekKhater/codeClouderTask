import React from "react";
import Row from "react-bootstrap/Row";

const BalanceContainer = ({ dotColor, BalanceTitle }) => {
  return (
    <div className="container exchangeAndAssets">
      <Row className="justify-content-evenly">
        <div className="col-1 me-2">
          <img src={dotColor} alt="circle" />
        </div>
        <div className="col-9">
          <h6>{BalanceTitle}</h6>
          <h6>0.256665554 BTC</h6>
          <h6>3,700.96 USD</h6>
        </div>
      </Row>
    </div>
  );
};

export default BalanceContainer;
