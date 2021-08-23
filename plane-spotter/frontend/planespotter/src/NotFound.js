import React from "react";
import chart from "./images/chart.jpg";

//Not Found component
function NotFound() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <h1 className="fs-1 fw-b text-danger">404 - Not Found</h1>
        <img src={chart} alt="IFR chart" width="800" />
      </div>
    </div>
  );
}
export default NotFound;
