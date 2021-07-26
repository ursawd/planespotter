DROP TABLE IF EXISTS users;

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
    CHECK (position('@' IN email) > 1),
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

DROP TABLE IF EXISTS sightings;

CREATE TABLE sightings(
  spotid SERIAL PRIMARY KEY,
  userid TEXT NOT NULL,
  registration TEXT NOT NULL,
  spotdate TEXT NOT NULL,
  spottime TEXT NOT NULL,
  location_field TEXT NOT NULL,
  notes TEXT NOT NULL,
  imgurl TEXT NOT NULL,
  owner_field TEXT NOT NULL,
  model TEXT NOT NULL,
  firstflt TEXT NOT NULL,
  delivery TEXT NOT NULL,
  numengines TEXT NOT NULL,
  engtype TEXT NOT NULL,
  age TEXT NOT NULL,
  plane_status TEXT NOT NULL
);




