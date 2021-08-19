import React from "react";
import DisplaySightings from "./DisplaySightings";
import EnterSighting from "./EnterSighting";

function Logbook({ user }) {
  console.log("logbook user", user);
  if (!user) {
    return (
      <div className="text-center shadow container">
        <h2 className="text-warning">Not Authorized</h2>
        <p>Please Login / Register before accessing this page</p>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center">Planespotting Logbook</h2>

      <div className="container">
        <div className="row gap-5">
          <div className="col-md-2 shadow">
            <EnterSighting />
          </div>
          <div className="col-md-9 shadow">
            <DisplaySightings user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logbook;
