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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
