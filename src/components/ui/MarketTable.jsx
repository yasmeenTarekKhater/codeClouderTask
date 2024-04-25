import React, { useEffect, useState } from "react";
import CustomButton from "./Button";
import { Row } from "react-bootstrap";
import ReactPaginate from 'react-paginate';

const MarketTable = ({ currenciesData }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(currenciesData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currenciesData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, currenciesData]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <table className="table mt-3">
        <thead className="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">24h Change</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((currency) => {
            const formattedPrice = parseFloat(currency.priceUsd).toFixed(2);
            const formattedPercent24 = parseFloat(currency.changePercent24Hr).toFixed(2);
            return (
              <tr key={currency.symbol}>
                <th scope="row">
                  <Row>
                    <div className="currencyImg col-2"></div>
                    <div className="col-5">
                      {currency.symbol}
                      <h6 className="currencyName">{currency.name}</h6>
                    </div>
                  </Row>
                </th>
                <td>$ {formattedPrice}</td>
                <td className={formattedPercent24 > 1 ? 'text-success' : 'text-danger'}>{formattedPercent24}%</td>
                <td>
                  <CustomButton customClass="tradebutton commonButton" buttonTitle="Trade" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default MarketTable;