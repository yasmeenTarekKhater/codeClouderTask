import React from 'react'
import Row from "react-bootstrap/Row";
import { BsQuestionCircle } from "react-icons/bs";

import TextInput from "../form/TextInput";

const Converter = () => {
  return (
    <div className="container mb-3">
            <h5>Converter</h5>
            <p>Amount <BsQuestionCircle /></p>
            <TextInput/>
            <Row>
              from
              to
            </Row>
            <div className="container">
              <h6>Amount</h6>
              <Row className="justify-content-between">
                <h5 className="col-7">0.444444444</h5>
                <h5 className="col-3">BTC</h5>
              </Row>
            </div>
    </div>
  )
}

export default Converter