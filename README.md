# Help

## Install
set public as "Resource root"
set JavaScript version to "ECMAScript 6"
enable node
enable tslint
install and enable wallaby.js

## Sequelize
https://github.com/sequelize/cli

## PostgreSQL
sudo apt-get install postgresql
sudo -u postgres psql
psql -h 207.154.240.210 -U postgres -d postgres
ALTER ROLE postgres WITH PASSWORD 'postgres';
\q

\list or \l list all databases
\c db_name to connect to a certain database
\dt list all tables in the current database
\d "AuthUsers" table schema
\x expanded display is on.

SELECT version();
CREATE DATABASE clubnika;
DROP DATABASE clubnika;

SELECT * FROM "AuthUsers";
