import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import CustomButton from './Button'
import FromAndTo from './FromAndTo'

const Payment = () => {
  return (
    <div className='container paymentContainer mb-5'>
        <Row className='justify-content-center gap-2 mb-3'>
        <CustomButton
            onClick={()=>handleButtonToggle(1)}
            customClass="col-5 commonButton activeBuyAndSellBtn"
            buttonTitle="Buy"
        ></CustomButton>
        <CustomButton
            onClick={()=>handleButtonToggle(2)}
            customClass="col-5 commonButton buyAndSellBtn"
            buttonTitle="Sell"
        ></CustomButton>
        </Row>
        <div className='text-center totalPament'>
            <h1 >$0</h1>
            <p>You can buy up to $25,000</p>
        </div>
        <div className='mb-2 swap'>
        <FromAndTo  customTitle="Buy"></FromAndTo>
        <div className='divider'></div>
        <FromAndTo  customTitle="Pay With"></FromAndTo>
        </div>
        <CustomButton
            customClass="col-12  updateMarketBtn commonButton"
            buttonTitle="Buy"
        ></CustomButton>
    </div>
  )
}

export default Payment