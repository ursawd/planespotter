import axios from "axios";
import React from "react";
import DisplaySightings from "./DisplaySightings";
import EnterSighting from "./EnterSighting";

function Logbook({ user }) {
  if (!user) {
    return (
      <div className="text-center shadow container w-25">
        <h2 className="text-warning">Not Authorized</h2>
        <p>Please Login / Register before accessing this page</p>
      </div>
    );
  }
  async function addSighting({
    registration,
    spotdate,
    spottime,
    location,
    notes,
  }) {
    console.log(
      "===========addSighting/props",
      "\n",
      registration,
      spotdate,
      spottime,
      location,
      notes
    );
    async function postSpotting() {
      console.log("----In postSpotting");
      const result = await axios.post("http://localhost:3001/spotting", {
        userid: user.email,
        registration: registration,
        spotdate: spotdate,
        spottime: spottime,
        location_field: location,
        notes: notes,
        imgurl: "",
        owner_field: "",
        model: "",
        firstflt: "",
        delivery: "",
        numengines: "",
        engtype: "",
        age: "",
        plane_status: "",
      });
      console.log("axios", result);
    }
    postSpotting();
    return "addSighting function";
  }

  return (
    <div>
      <h2 className="text-center">Planespotting Logbook</h2>

      <div className="container">
        <div className="row gap-5">
          <div className="col-md-2 shadow">
            <EnterSighting addSighting={addSighting} />
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
