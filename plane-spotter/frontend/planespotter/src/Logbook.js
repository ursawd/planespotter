import React from "react";

function Logbook({ user }) {
  return (
    <>
      <h1>Logbook Component</h1>
      {!user && <h2>Not authorized</h2>}
    </>
  );
}
export default Logbook;
