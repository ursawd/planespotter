import React, { useState } from "react";

//--EnterSighting is the form on the logbook page that takes in the
//users sighting information. Standard data entry form.
function EnterSighting({ addSighting }) {
  const INTIAL_STATE = {
    registration: "",
    spotdate: "",
    spottime: "",
    location: "",
    notes: "",
  };
  const [formData, setFormData] = useState(INTIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    //addSighting function in Logbook.js
    await addSighting({ ...formData });
    setFormData(INTIAL_STATE);
  }

  return (
    <div className="entryPage">
      <div className="entryContainer d-flex">
        <div className="left">
          <h4>Add a spotting</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="registration" className="form-label">
                Registration
              </label>
              <input
                type="text"
                className="form-control"
                id="registration"
                onChange={handleChange}
                value={formData.registration}
                name="registration"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="spotdate" className="form-label">
                Date
              </label>
              <input
                type="text"
                className="form-control"
                id="spotdate"
                onChange={handleChange}
                value={formData.spotdate}
                name="spotdate"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="spottime" className="form-label">
                Time
              </label>
              <input
                type="text"
                className="form-control"
                id="spottime"
                onChange={handleChange}
                value={formData.spottime}
                name="spottime"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Locations
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                onChange={handleChange}
                value={formData.location}
                name="location"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                className="form-control"
                rows="4"
                id="notes"
                onChange={handleChange}
                value={formData.notes}
                name="notes"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add To Log
            </button>
          </form>
          <p className="m-0 p-0">Test registration numbers:</p>
          <p className="m-0 p-0">522AX B779XY HA-LHU</p>
        </div>
      </div>
    </div>
  );
}

export default EnterSighting;
