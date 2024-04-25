import React from 'react'
import Row from "react-bootstrap/Row";
import { BsQuestionCircle } from "react-icons/bs";

import swap from '../../assets/icons/fi-rr-shuffle.png';
import TextInput from "../form/TextInput";
import FromAndTo from './FromAndTo';

const Converter = () => {
  return (
    <div className="container mb-3 p-3 converterContainer">
            <h5>Converter</h5>
            <p className='ms-1'>Amount <BsQuestionCircle className='ms-1 questionicon' /></p>
            <TextInput customClass="h-25" placeholderText="0.00"/>
            <Row className='justify-content-center gap-1 mt-3 mb-2 align-items-center'>
              <FromAndTo customClass='col-9 swap'></FromAndTo>
              <div className='col-2 swap'>
                  <img src={swap} alt='swap' className='mt-4 w-100'/>
              </div>
            </Row>
            <div className="container amountContainer">
              <p>Amount</p>
              <Row className="justify-content-between">
                <p className="col-7">0.444444444</p>
                <p className="col-3">BTC</p>
              </Row>
            </div>
    </div>
  )
}

export default Converter