import React from "react";
import inthesky from "./images/inthesky.jpg";

function Home() {
  return (
    <section className="section-home container">
      <div className="row">
        <div className="left col-lg py-2">
          <img src={inthesky} alt="Plane in sky"></img>
        </div>
        <div className="right col-lg d-flex align-items-center justify-content-center">
          <div>
            <h1>Plane Spotter</h1>
            <h3> An aircraft sightings logbook</h3>
            <q>
              Aircraft spotting or plane spotting is a hobby of tracking the
              movement of aircraft, which is often accomplished by photography.
              Besides monitoring aircraft, aircraft spotting enthusiasts (who
              are usually called plane spotters) also record information
              regarding airports, air traffic control communications and airline
              routes.
            </q>
            <p>
              <cite>From Wikipedia, the free encyclopedia </cite>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
