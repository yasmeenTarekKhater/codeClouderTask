import React from 'react'
import  Button  from 'react-bootstrap/Button';

const CustomButton = ({customClass,children}) => {
  return (
    <Button className={customClass}>
          {children}
    </Button>
  )
}

export default CustomButton;