import React from "react";
import DisplaySightings from "./DisplaySightings";
import EnterSighting from "./EnterSighting";

function Logbook({ user }) {
  console.log("logbook user", user);
  return (
    <div>
      <h2 className="text-center">Planespotting Logbook</h2>
      {/* {!user && <h2>Not authorized</h2>} */}
      <div className="container">
        <div className="row gap-5">
          <div className="col-md-2 shadow">
            <EnterSighting />
          </div>
          <div className="col-md-9 shadow">
            <DisplaySightings />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logbook;
