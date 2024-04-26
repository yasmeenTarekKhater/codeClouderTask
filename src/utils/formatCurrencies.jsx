const formatCurrencies = (currencies) => {
  const formattedArray = currencies.map((currency, index) => {
    if (index === 0) {
      return {
        value: currency.name,
        label: currency.name,
        isFixed: true,
      };
    } else {
      return {
        value: currency.symbol,
        label: currency.name,
      };
    }
  });

  return formattedArray;
};

export default formatCurrencies;
