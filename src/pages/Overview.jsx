import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import { AiFillFire } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import axios from 'axios';

import print from "../assets/icons/fi-rr-print.png";
import check from "../assets/icons/f-check.png";
import deposit from "../assets/icons/deposit.png";
import dotColor from "../assets/images/color.png";
import dotColor2 from "../assets/images/color2.png";
import refresh from "../assets/icons/fi-rr-refresh.png";

import CustomButton from "../components/ui/Button";
import BalanceContainer from "../components/ui/BalanceContainer";
import BalanceProgress from "../components/ui/BalanceProgress";
import MarketTable from "../components/ui/MarketTable";
import Converter from "../components/ui/Converter";
import Payment from "../components/ui/Payment";

import "./css/Overview.css";


const Overview = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [currenciesData, setcurrenciesData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const getUpdateData = () => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then(function (response) {
        // handle success
        setcurrenciesData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    //fetch data immediatly 
    getUpdateData();
    const updateData = setInterval(() => {
      // Update every one minute
      getUpdateData()
      setLastUpdate(new Date());
    }, 60000);

    return () => {
      clearInterval(updateData);
    };
  }, []);
  
  //also update data on clickon button
  const handleUpdateClick = () => {
    getUpdateData()
    setLastUpdate(new Date());
  };
  
  //format last update time day month year hour
  const formattedLastUpdate = lastUpdate.toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute:"numeric",
    year:"numeric",
    hour12: true,
  });
  // add custom class to each link clicked on [spot holding /hot/favourite]
  const handleLinkClick = (pathNumber) => {
    setActiveLink(pathNumber);
  };
  return (
    <Container className="mt-3">
      <Row className="justify-content-between mb-2 pe-2">
        <h3 className="col-2">Overview</h3>
        <CustomButton
          customClass="col-1 printButton commonButton"
          imageSource={print}
          imagealt="print"
          buttonTitle="Print"
        ></CustomButton>
      </Row>

      <Row>
        {/* -----------LeftSide-------------- */}
        <div className="col-9">
          {/* ----------Balance Container------------ */}
          <div className="container rounded-4 py-3 totalBalanceContainer">
            <Row className="justify-content-between">
              <div className="col-4">
                <h6>Total Balance</h6>
                <h3 className="d-flex">
                  0.26231428{" "}
                  <Badge pill bg="warning" className="ms-2 btcBadge">
                    BTC
                  </Badge>
                </h3>
                <h5 className="totalUSD">3,700.96 USD</h5>
              </div>
              <div className="col-4 d-flex justify-content-end gap-1 h-25">
                <CustomButton
                  customClass="withdrawBtn commonButton"
                  imageSource={check}
                  imagealt="Withdraw"
                  buttonTitle="Withdraw"
                ></CustomButton>
                <CustomButton
                  customClass="depositBtn commonButton"
                  imageSource={deposit}
                  imagealt="Deposit"
                  buttonTitle="Deposit"
                ></CustomButton>
              </div>
            </Row>
            <Row className="justify-content-between align-items-center mt-2">
              <div className="col-6 gap-2 d-flex ">
                <BalanceContainer
                  BalanceTitle="Exchange Balance"
                  dotColor={dotColor}
                ></BalanceContainer>
                <BalanceContainer
                  BalanceTitle="Asset Balances"
                  dotColor={dotColor2}
                ></BalanceContainer>
              </div>
              <div className="col-5 mb-3">
                <BalanceProgress
                  balanceTitle="Exchange Balance"
                  balanceColor="warning"
                  balanceNumber={45}
                ></BalanceProgress>
                <BalanceProgress
                  balanceTitle="Asset Balances"
                  balanceColor="primary"
                  balanceNumber={80}
                ></BalanceProgress>
              </div>
            </Row>
          </div>
          {/* ----------End Balance Container------------ */}

          {/* ----------Market Container------------ */}
          <div className="container rounded-4 mt-3 py-1 maketsContainer">
            <Row className="justify-content-between align-items-center">
              <h5 className="col-2">Markets</h5>
              <div className="col-6 d-flex align-items-center h-25">
                <p className="col-9 mt-3">
                  <span>Last Updated | </span> {formattedLastUpdate}
                </p>
                <CustomButton
                  customClass="col-3 updateMarketBtn commonButton"
                  imageSource={refresh}
                  imagealt="refresh"
                  buttonTitle="Update"
                  handleUpdateClick={handleUpdateClick}
                ></CustomButton>
              </div>
            </Row>
            <Row>
              <div className="d-flex gap-4">
                <Link
                  to="/"
                  className={
                    activeLink === 1 ? "maketsLinkActive" : "maketsLink"
                  }
                  onClick={() => handleLinkClick(1)}
                >
                  Spot Holdings
                </Link>
                <Link
                  to="/"
                  className={
                    activeLink === 2 ? "maketsLinkActive" : "maketsLink"
                  }
                  onClick={() => handleLinkClick(2)}
                >
                  <AiFillFire className="me-1" />
                  Hot
                </Link>
                <Link
                  to="/"
                  className={
                    activeLink === 3 ? "maketsLinkActive" : "maketsLink"
                  }
                  onClick={() => handleLinkClick(3)}
                >
                  <AiFillHeart className="me-1" />
                  Favorites
                </Link>
              </div>
            </Row>
            <hr/>
            <MarketTable currenciesData={currenciesData} />
          </div>
          {/* ---------- End Market Container ------------ */}
        </div>
        {/* ----------- End LeftSide -------------- */}

        {/* -----------RigthSide-------------- */}
        <div className="col-3 ">
          <Converter/>
          <Payment/>
        </div>
        {/* ----------- End RigthSide-------------- */}

      </Row>
    </Container>
  );
};

export default Overview;
