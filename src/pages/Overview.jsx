import React from "react";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

import print from "../assets/icons/fi-rr-print.png";
import check from "../assets/icons/f-check.png";
import deposit from "../assets/icons/deposit.png";
import dotColor from "../assets/images/color.png";
import dotColor2 from "../assets/images/color2.png";
import CustomButton from "../components/ui/Button";
import BalanceContainer from "../components/ui/BalanceContainer";

import './css/Overview.css';
import BalanceProgress from "../components/ui/BalanceProgress";


const Overview = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-between mb-2 pe-2">
        <h3 className="col-2">Overview</h3>
        <CustomButton customClass="col-1 printButton">
          <img src={print} alt='print' className="me-2"/>
          Print
        </CustomButton>
      </Row>
      <Row>
        <div className="col-9">
           <div className="container rounded-4 py-3 totalBalanceContainer">
            <Row className="justify-content-between">
              <div className="col-4">
                  <h6>Total Balance</h6>
                  <h3 className="d-flex">0.26231428 <Badge pill bg="warning"  className="ms-2 btcBadge" >BTC</Badge></h3>
                  <h5 className="totalUSD">3,700.96 USD</h5>
              </div>
              <div className="col-4 d-flex justify-content-end gap-1 h-25">
                <CustomButton customClass="withdrawBtn">
                 <img src={check} alt="Withdraw" className="me-1"/>
                  Withdraw
                </CustomButton>
                <CustomButton customClass="depositBtn">
                  <img src={deposit} alt="Deposit" className="me-1"/>
                  Deposit
                </CustomButton>
              </div>
            </Row>
            <Row className="justify-content-between align-items-center mt-2">
              <div className="col-6 gap-2 d-flex ">
                <BalanceContainer BalanceTitle='Exchange Balance' dotColor={dotColor}></BalanceContainer>
                <BalanceContainer BalanceTitle='Asset Balances' dotColor={dotColor2}></BalanceContainer>
              </div>
              <div className="col-5 mb-3">
                  <BalanceProgress 
                  balanceTitle='Exchange Balance'
                  balanceColor='warning'
                  balanceNumber={45}
                  ></BalanceProgress>
                  <BalanceProgress 
                  balanceTitle='Asset Balances'
                  balanceColor='primary'
                  balanceNumber={80}
                  ></BalanceProgress>
              </div>
            </Row>
           </div>
           <div className="container rounded-4 py-3 maketsContainer">
             <h2>Market</h2>
           </div>
        </div>
        <div className="col-3 ">
           <h2>top</h2>
           <h2>bottom</h2>
        </div>
      </Row>
    </Container>
  );
};

export default Overview;
