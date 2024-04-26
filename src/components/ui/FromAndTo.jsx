import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import SelectOption from "./SelectOption";


const FromAndTo = ({ customTitle ,selectData }) => {
  // handle changeing icon and show hide select options
  const [rigthDownIcon,setrigthDownIcon]=useState(false);
  const handlerigthDown=()=>{
    setrigthDownIcon(!rigthDownIcon);
  }
  return (
      <div className="container text-start">
        <Row className="justify-content-between">
          <p className="col-3 fromtext">{customTitle}</p>
          <p className="col-7 ">from coin</p>
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
        <SelectOption selectData={selectData}></SelectOption>
        </div>
      </div>
  );
};

export default FromAndTo;
