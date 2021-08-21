import React, { useEffect } from "react";
import axios from "axios";
import taxiing from "./images/taxiing.jpg";
import { v4 as uuid } from "uuid";

function DisplaySightings({ user, sightings, setSightings }) {
  useEffect(() => {
    async function getSightings() {
      const result = await axios.get(
        `http://localhost:3001/spotting?email=${user.email}`
      );
      // return result.data.sightings;
      setSightings(result.data.sightings);
      console.log("sightings", result.data.sightings);
    }
    getSightings();
  }, [user.email, setSightings]);

  return (
    <div>
      <h4>Sightings Log:</h4>

      <div className="">
        {sightings.map((entry) => {
          return (
            <div
              key={uuid()}
              className="mb-2 bg-light d-flex justify-content-between"
            >
              <img
                id="spot-image"
                src={taxiing}
                alt="Airplane"
                height="100"
              ></img>

              <div className="divTable">
                <div className="divTR d-flex">
                  <div className="divTH">Registration</div>
                  <div className="divTH">Date</div>
                  <div className="divTH">Time</div>
                  <div className="divTH">Location</div>
                  <div className="divTH">Notes</div>
                </div>
                <div className="divTR d-flex">
                  <div className="divTD">{entry.registration}</div>
                  <div className="divTD">{entry.spotdate}</div>
                  <div className="divTD">{entry.spottime}</div>
                  <div className="divTD scroll">{entry.location_field}</div>
                  <div className="divTD scroll">{entry.notes}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DisplaySightings;
