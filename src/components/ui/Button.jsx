import React from 'react'
import  Button  from 'react-bootstrap/Button';

const CustomButton = ({customClass,imageSource,imagealt,buttonTitle,handleUpdateClick}) => {
  return (
    <Button className={customClass} onClick={handleUpdateClick}>
         <img className='me-1' src={imageSource} alt={imagealt}/>
         {buttonTitle}
    </Button>
  )
}

export default CustomButton;