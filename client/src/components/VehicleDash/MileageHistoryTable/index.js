import React from "react";
import "./style.css";
import Moment from "react-moment";

function MileageHistoryTable({ date, mileage }) {
  mileage = mileage.toLocaleString();
  return (
    <tr>
      <td>
        <Moment format="MM/DD/YYYY" date={date} />
      </td>

      <td>{mileage}</td>
    </tr>
  );
}

export default MileageHistoryTable;
