# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev

##DATA BASE
yarn --cwd packages/backend add pg
docker run --name backstage_postgres_db -e POSTGRES_PASSWORD=password -p 5432:5432 -v ./dbs:/var/lib/postgresql/data -d postgres
psql -h localhost -p 5432 -d postgres -U postgres
-- Create the database
CREATE DATABASE backstage_db;
-- Create the user with a random password
CREATE USER backstage_db_user WITH ENCRYPTED PASSWORD backstage_db_password;
-- Grant all privileges on the database to the user
GRANT ALL PRIVILEGES ON DATABASE backstage_db TO backstage_db_user;
```
