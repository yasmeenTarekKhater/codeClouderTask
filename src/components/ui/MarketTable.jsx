import React from "react";
import CustomButton from "./Button";

const MarketTable = () => {
  return (
    <table className="table  mt-3 ">
      <thead className="table-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">24h Change</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
          <CustomButton customClass="tradebutton commonButton" buttonTitle="Trade"></CustomButton>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MarketTable;
