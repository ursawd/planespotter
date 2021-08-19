import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplaySightings({ user }) {
  const [sightings, setSightings] = useState([]);

  useEffect(async function getSightings() {
    const result = await axios.get(
      `http://localhost:3001/spotting?email=${user.email}`
    );
    console.log("result", result.data.sightings);
    // return result.data.sightings;
    setSightings(result.data.sightings);
  }, []);
  // getSightings();

  return (
    <div>
      <h4>Display * sightings:</h4>
      {sightings.map((entry) => {
        return (
          <pre>
            <p>{entry.registration}</p>
          </pre>
        );
      })}
    </div>
  );
}
export default DisplaySightings;
