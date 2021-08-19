import React from "react";
// const testdata = {
//   userid: "pdb555@gmail.com",
//   registration: "N1234",
//   spotdate: "Jan 1 2021",
//   spottime: "5:00pm",
//   location_field: "MCO",
//   notes: "This is a test",
// };
function EnterSighting() {
  return (
    <div className="entryPage">
      <div className="entryContainer d-flex">
        <div className="left">
          <h4>Add a spotting</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="registration" className="form-label">
                Registration
              </label>
              <input type="text" className="form-control" id="registration" />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input type="text" className="form-control" id="date" />
            </div>

            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <input type="text" className="form-control" id="time" />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Locations
              </label>
              <input type="text" className="form-control" id="location" />
            </div>

            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea className="form-control" rows="4" id="notes" />
            </div>

            <button type="submit" className="btn btn-primary">
              Add To Log
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EnterSighting;
