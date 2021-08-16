import React from "react";
import goaround from "./images/goaround.webp";

function NotFound() {
  return (
    <div>
      <h1 className="fs-1 fw-b text-warning">404 - Not Found</h1>
      <img src={goaround} alt="AN-124 taking off" />
    </div>
  );
}
export default NotFound;
