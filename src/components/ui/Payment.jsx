import React from 'react'
import Row from 'react-bootstrap/Row'
import CustomButton from './Button'

const Payment = () => {
  return (
    <div className='container'>
        <Row className='justify-content-center'>
        <CustomButton
            customClass="col-3 updateMarketBtn commonButton"
            buttonTitle="Buy"
        ></CustomButton>
        <CustomButton
            customClass="col-3 updateMarketBtn commonButton"
            buttonTitle="Sell"
        ></CustomButton>
        </Row>
        <div className='text-center'>
            <h1 >$0</h1>
            <p>You can buy up to $25,000</p>
        </div>
        <CustomButton
            customClass="col-12 updateMarketBtn commonButton"
            buttonTitle="Buy"
        ></CustomButton>
    </div>
  )
}

export default Payment