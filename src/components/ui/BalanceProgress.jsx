import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const BalanceProgress = ({balanceTitle,balanceColor,balanceNumber}) => {
  return (
    <div className="progressBarContainer">
        <p>{balanceTitle}</p>
        <ProgressBar animated variant={balanceColor} now={balanceNumber} />
    </div>
  )
}

export default BalanceProgress;