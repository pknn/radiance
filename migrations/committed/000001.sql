--! Previous: -
--! Hash: sha1:bc3e30f6ea4592d69e67d4e1ea6dc107180bf6be

-- Enter migration here

create extension "uuid-ossp";

create table events (
  id uuid primary key default uuid_generate_v4(),
  title varchar(500) not null,
  description varchar(500) not null,
  details text not null,
  location_name varchar(255) not null,
  capacity smallint not null,
  latitude decimal,
  longitude decimal,
  facebook_link varchar(255),
  instagram_link varchar(255),
  website_link varchar(500)
);
