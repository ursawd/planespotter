const express = require("express");
const router = express.Router();
const db = require("./db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("./config");
const { UnauthorizedError } = require("./expressError");

router.get("/", async function (req, res, next) {
  const { email, password } = req.body;
  console.log(req.body);
  let response = await login(email, password);
  if (response.rowCount === 0) {
    return res.json({ error: { message: "not authorized", status: 404 } });
  }
  return res.json({ user: response.rows[0] });
});

router.post("/", async function (req, res, next) {
  const { email, password, firstName, lastName } = req.body;
  //Hash password with bcrypt
  const hashPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

  let response = await register(email, hashPassword, firstName, lastName);
  return res.json({ success: response });
});

router.get("/spotting", async function (req, res, next) {
  const { email } = req.body;
  let response = await getSpottings(email);
  return res.json({ sightings: response.rows });
});

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
  return res.json({ success: response });
});
//------------------------------------------------
async function getSpottings(id) {
  const result = await db.query(
    `SELECT * 
     FROM sightings
     WHERE userid = $1`,
    [id]
  );
  return result;
}

async function login(email, password) {
  // try to find the user first
  const result = await db.query(
    `SELECT email,
            password                
      FROM users
      WHERE email = $1`,
    [email]
  );
  return result;
}
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
