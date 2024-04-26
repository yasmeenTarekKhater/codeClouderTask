import React, { useState } from 'react'
import Select from 'react-select';


const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles= {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};
  
const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const SelectOption = ({selectData,handleSelectedCoin}) => {
   const handleChange = (selectedOption) => {
    handleSelectedCoin(selectedOption.label);
   };

    const groupedOptions= [
        {
          label: 'Currencies',
          options: selectData,
        }
    ];
    return (
      <Select
        defaultValue={selectData[1]}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        onChange={handleChange}
      />
    )
}

export default SelectOption;