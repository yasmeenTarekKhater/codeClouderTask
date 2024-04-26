import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import SelectOption from "./SelectOption";


const FromAndTo = ({ customTitle ,selectData }) => {
  // handle changeing icon and show hide select options
  const [rigthDownIcon,setrigthDownIcon]=useState(false);
  // handle changeing select option and display value selected
  const [selectedCoin,setSelectedCoin]=useState('');
  const handlerigthDown=()=>{
    setrigthDownIcon(!rigthDownIcon);
  }
  const handleSelectedCoin=(selectedCoin)=>{
     setSelectedCoin(selectedCoin);
  }
  return (
      <div className="container text-start">
        <Row className="justify-content-between">
          <p className="col-3 fromtext">{customTitle}</p>
          <p className="col-7 ">{selectedCoin}</p>
          <span className="col-1" onClick={handlerigthDown}>
            {rigthDownIcon
            ?
            <AiOutlineDown color="gray" cursor='pointer'/>
            :
            <AiOutlineRight color="gray" cursor='pointer' />
            }
          </span>
        </Row>
        <div className={`selectContainer ${rigthDownIcon?'showselect':'hideselect'}`}>
        <SelectOption selectData={selectData} handleSelectedCoin={handleSelectedCoin}></SelectOption>
        </div>
      </div>
  );
};

export default FromAndTo;
