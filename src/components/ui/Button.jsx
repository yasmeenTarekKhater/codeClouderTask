import React from 'react'
import  Button  from 'react-bootstrap/Button';

const CustomButton = ({customClass,imageSource,imagealt,buttonTitle}) => {
  return (
    <Button className={customClass}>
         <img className='me-1' src={imageSource} alt={imagealt}/>
         {buttonTitle}
    </Button>
  )
}

export default CustomButton;