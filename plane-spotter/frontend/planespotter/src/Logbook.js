import axios from "axios";
import React, { useState } from "react";
import DisplaySightings from "./DisplaySightings";
import EnterSighting from "./EnterSighting";
import getImage from "./external-api/get-image";

//Logbook is the app display component. The left side is the sighting
//information entry form and the right side is the list of the the
//aircraft sightings. Hover over the image and the image expands (CSS).
//If user is not signed in, a Not Authorized page is displayed/
function Logbook({ user }) {
  const [sightings, setSightings] = useState([]);

  if (!user) {
    return (
      <div className="text-center shadow container w-25">
        <h2 className="text-warning">Not Authorized</h2>
        <p>Please Login / Register before accessing this page</p>
      </div>
    );
  } // addSighting called from EnterSighting
  async function addSighting({
    registration,
    spotdate,
    spottime,
    location,
    notes,
  }) {
    async function postSpotting() {
      let sightingInfo = {
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
      };
      //Get aircraft image URL from external API
      const result = await getImage(registration);
      sightingInfo.imgurl = result;
      //POST sighting information into local database
      await axios.post("http://localhost:3001/spotting", sightingInfo);
      setSightings([...sightings, sightingInfo]);
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
            <DisplaySightings
              user={user}
              sightings={sightings}
              setSightings={setSightings}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logbook;
