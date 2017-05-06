# Help

## Install
set public as "Resource root"
set JavaScript version to "ECMAScript 6"
enable tslint

## Ssh connections
alias awix='ssh misticwonder@139.59.209.151'
alias awixfs='sshfs misticwonder@139.59.209.151:/var/www ~/AWIX'
alias awixfsu='fusermount -u ~/AWIX'

## PM2 
pm2 list

cd /var/www/api.awix.io && PORT=6600 pm2 start --name="awix-master" npm -- start
cd /var/www/development.api.awix.io && PORT=6660 pm2 start --name="awix-development" npm -- start

pm2 delete awix-development
pm2 delete all
pm2 logs awix-development

## Sequelize
./node_modules/.bin/sequelize model:create --name User --attributes email:string
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:migrate:undo

## PostgreSQL
sudo apt-get install postgresql
sudo -u postgres psql
ALTER ROLE postgres WITH PASSWORD 'postgres';
\q

\list or \l list all databases
\c db_name to connect to a certain database
\dt list all tables in the current database
\d "Users" table schema

SELECT version();
CREATE DATABASE awix;
DROP DATABASE awix;

SELECT * FROM "Users";
