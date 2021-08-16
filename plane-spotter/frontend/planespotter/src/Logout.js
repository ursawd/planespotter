import React, { useEffect } from "react";
import hanger from "./images/hanger.jpg";
import { Link } from "react-router-dom";

function Logout({ setUser }) {
  useEffect(() => {
    setUser(null);
  });

  return (
    <section className=" container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="fs-1 fw-b text-primary">You are logged out</h1>
          <img
            className="my-3"
            src={hanger}
            alt="Airplane in hanger"
            width="450"
            height="300"
          />
          <Link to="/" className="btn btn-link">
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Logout;
