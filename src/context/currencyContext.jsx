import React, { createContext, useState } from 'react'

const currencyContext=createContext();
const UseContextProvider = ({children}) => {
    const [currencies,setCurrencies]=useState([]);
    const handleCurrency=(currenciesData)=>{
        setCurrencies(currenciesData);
    }
  return (
    <currencyContext.Provider value={{currencies,handleCurrency}}>
        {children}
    </currencyContext.Provider>
  )
}

export {UseContextProvider,currencyContext};