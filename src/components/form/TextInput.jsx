import React from 'react'
import  Form  from 'react-bootstrap/Form'

const TextInput = ({customClass,placeholderText}) => {
  return (
    <Form.Control type="text" className={customClass} id="inputsearch" placeholder={placeholderText}/>
  )
}

export default TextInput