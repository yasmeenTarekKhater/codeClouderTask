import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
  return (
    <div className='mt-4'>
    <Spinner animation="border" variant="primary"/>
    </div>
  )
}

export default Loading