import React, { useState } from "react";
import taxiing from "./images/taxiing.jpg";

function Register() {
  const INTIAL_STATE = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(INTIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  async function handleSubmit(evt) {
    // evt.preventDefault();
  }

  return (
    <section className="section-login container">
      <div className="row">
        <div className="left col-lg">
          <img src={taxiing} alt="Plane taxiing"></img>
        </div>
        <div className="right col-lg d-flex align-items-center justify-content-center">
          <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label id="email-label" htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  value={formData.email}
                  name="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label
                  id="password-label"
                  htmlFor="password"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  value={formData.password}
                  name="password"
                  autoComplete="off"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
