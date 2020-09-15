import React from "react";
import "./style.css";

function MileageHistoryTable({ date, mileage }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{mileage}</td>
    </tr>
  );
}

export default MileageHistoryTable;
