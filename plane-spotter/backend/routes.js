const express = require("express");
const router = express.Router();
const db = require("./db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("./config");
const { UnauthorizedError } = require("./expressError");
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--see if user (email) is in the database, if so return email and hashed password
router.post("/user", async function (req, res, next) {
  const { email, password } = req.body;
  //see if email in database
  let response = await findUser(email);
  //if rowCount === 0 then no data returned from SQL and email not found
  if (response.rowCount === 0) {
    return res.json({ error: { message: "email not found", status: 400 } });
  }
  //if email found, compare password hash against input password now hashed
  //if result not true, password does not match
  const hash = response.rows[0].password;
  console.log(password, hash);

  const result = await bcrypt.compare(password, hash);
  if (!result) {
    console.log("passwords not match");
    return res.json({ error: { message: "invalid password", status: 401 } });
  }

  //return data from SQL query which matched email
  console.log("success");
  return res.json({ user: response.rows[0], status: 200 });
});
//--------------------------------------------------------------------------------
//register user by checking if email already in database, if not hash password and
//store user data in database
router.post("/user/register", async function (req, res, next) {
  const { email, password, firstName, lastName } = req.body;
  //see if email in database, if so return error message
  let result = await findUser(email);
  //if rowCount === 0 then no data returned from SQL and email not found
  if (result.rowCount !== 0) {
    return res.json({ error: { message: "duplicate email", status: 400 } });
  }
  //Hash supplied password with bcrypt
  const hashPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  //make SQL entry into user table
  let response = await register(email, hashPassword, firstName, lastName);
  return res.json({ success: response, status: 200 });
});
//--------------------------------------------------------------------------------
// return all spottings entries for a specific email (user)
router.get("/spotting", async function (req, res, next) {
  const email = req.query.email;
  console.log("spotting input email=", email);
  let response = await getSpottings(email);
  return res.json({ sightings: response.rows, status: 200 });
});
//--------------------------------------------------------------------------------
//add to database a spotting entry for a specific eamil (user)
router.post("/spotting", async function (req, res, next) {
  const {
    userid,
    registration,
    spotdate,
    spottime,
    location_field,
    notes,
    imgurl,
    owner_field,
    model,
    firstflt,
    delivery,
    numengines,
    engtype,
    age,
    plane_status,
  } = req.body;

  let response = await createSighting(
    userid,
    registration,
    spotdate,
    spottime,
    location_field,
    notes,
    imgurl,
    owner_field,
    model,
    firstflt,
    delivery,
    numengines,
    engtype,
    age,
    plane_status
  );
  return res.json({ success: response, status: 200 });
});

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
async function getSpottings(id) {
  console.log("getSpottings id", id);
  const result = await db.query(
    `SELECT * 
     FROM sightings
     WHERE userid = $1`,
    [id]
  );
  return result;
}

async function findUser(email) {
  // try to find the user first
  const result = await db.query(
    `SELECT email,password               
      FROM users
      WHERE email = $1`,
    [email]
  );
  return result;
}
//--
async function register(email, password, firstName, lastName) {
  const result = await db.query(
    `INSERT INTO users
    (email,
     password,
     first_name,
     last_name
     )
    VALUES ($1, $2, $3, $4)
    RETURNING  email, first_name AS "firstName", last_name AS "lastName"`,
    [email, password, firstName, lastName]
  );
  return result.rows[0];
}
//--
async function createSighting(
  userid,
  registration,
  spotdate,
  spottime,
  location_field,
  notes,
  imgurl,
  owner_field,
  model,
  firstflt,
  delivery,
  numengines,
  engtype,
  age,
  plane_status
) {
  const result = await db.query(
    `INSERT INTO sightings
    (
      userid,registration,spotdate,spottime,location_field,notes,imgurl,owner_field,model,firstflt,delivery,numengines,engtype,age,plane_status
     )
    VALUES ($1, $2, $3, $4 , $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING  userid,registration`,
    [
      userid,
      registration,
      spotdate,
      spottime,
      location_field,
      notes,
      imgurl,
      owner_field,
      model,
      firstflt,
      delivery,
      numengines,
      engtype,
      age,
      plane_status,
    ]
  );
  console.log(result);
  return result.rows[0];
}

//------------------------------------------------
//------------------------------------------------
module.exports = router;
