\echo 'Delete and recreate the planespotter db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS planespotter;
CREATE DATABASE planespotter;
\c planespotter

\i planespotter-schema.sql
\i planespotter-seed.sql

