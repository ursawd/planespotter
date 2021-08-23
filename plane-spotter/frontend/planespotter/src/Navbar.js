import React from "react";
import { NavLink } from "react-router-dom";

//Navbar located below header
function Navbar({ user }) {
  return (
    <nav className="text-center p-5 col-md mt-5">
      <div>
        <NavLink exact to="/" className="mx-3">
          Home
        </NavLink>
        {!user && (
          <>
            <NavLink exact to="/login" className="mx-3">
              Login
            </NavLink>
            <NavLink exact to="/register" className="mx-3">
              Register
            </NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink exact to="/logbook" className="mx-3">
              Logbook
            </NavLink>
            <NavLink exact to="/logout" className="mx-3">
              Logout
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
