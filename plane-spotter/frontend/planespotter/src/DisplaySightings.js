import React, { useState, useEffect } from "react";
import axios from "axios";
import taxiing from "./images/taxiing.jpg";

function DisplaySightings({ user }) {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    async function getSightings() {
      const result = await axios.get(
        `http://localhost:3001/spotting?email=${user.email}`
      );
      // return result.data.sightings;
      setSightings(result.data.sightings);
    }
    getSightings();
  }, [user.email]);

  return (
    <div>
      <h4>Sightings Log:</h4>

      <div className="">
        {sightings.map((entry) => {
          return (
            <div className="mb-2 bg-light d-flex justify-content-around">
              <img
                id="spot-image"
                src={taxiing}
                alt="Airplane"
                height="100"
              ></img>

              <table>
                <thead>
                  <tr>
                    <th>Registration</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{entry.registration}</td>
                    <td>{entry.spotdate}</td>
                    <td>{entry.spottime}</td>
                    <td>{entry.location_field}</td>
                    <td>
                      <div className="scroll">{entry.notes}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DisplaySightings;
