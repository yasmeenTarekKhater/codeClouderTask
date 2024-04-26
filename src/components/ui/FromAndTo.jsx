import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import Select from 'react-select';

const FromAndTo = ({ customTitle }) => {
  const [rigthDownIcon,setrigthDownIcon]=useState(false);
  const handlerigthDown=()=>{
    setrigthDownIcon(!rigthDownIcon)
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
          Show
        </div>
      </div>
  );
};

export default FromAndTo;
