--! Previous: -
--! Hash: sha1:07fc856deb8cf39fcc7d3a3137b1fd60b1196db1

-- Enter migration here

create extension "uuid-ossp";

create table events (
  id uuid primary key default uuid_generate_v4(),
  title varchar(500) not null,
  description varchar(500) not null,
  details json not null,
  location_name varchar(255) not null,
  capacity smallint not null,
  latitude decimal,
  longitude decimal,
  facebook_link varchar(255),
  instagram_link varchar(255),
  website_link varchar(500)
);
