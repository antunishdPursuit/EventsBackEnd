DROP DATABASE IF EXISTS users_dev;
CREATE DATABASE users_dev;

\c users_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 profile_picture TEXT,
 username TEXT NOT NULL,
 bio TEXT DEFAULT 'Excited for Future Concerts',
 looking_for_group BOOLEAN,
 date_created DATE
);

DROP TABLE IF EXISTS events;

CREATE TABLE events (
 id SERIAL PRIMARY KEY,
 artist TEXT,
 venue TEXT,
 city TEXT,
 artist_picture TEXT,
 price NUMERIC,
 user_id INTEGER REFERENCES users (id)
 ON DELETE CASCADE
);