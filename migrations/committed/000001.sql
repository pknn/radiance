--! Previous: -
--! Hash: sha1:7b275f71bf4e45238a0924c195f7c105828c377e

-- Enter migration here

create extension "uuid-ossp";

create table events (
  id uuid primary key default uuid_generate_v4(),
  title varchar(500) not null,
  description varchar(500),
  details json,
  location_name varchar(255),
  latitude decimal,
  longitude decimal,
  facebook_link varchar(255),
  instagram_link varchar(255),
  website_link varchar(500)
);
