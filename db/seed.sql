-- ! users
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  username VARCHAR(20),
  email VARCHAR(100),
  profile_img TEXT
);

-- ! user_hash
CREATE TABLE user_hash (
hash_id SERIAL PRIMARY KEY,
hash TEXT,
user_id INT REFERENCES users(user_id)
);

-- ! post
CREATE TABLE post (
post_id SERIAL PRIMARY KEY,
title VARCHAR(40),
content TEXT,
user_id INT REFERENCES users(user_id)
);

-- ! votes
CREATE TABLE votes (
user_id INT REFERENCES users(user_id),
post_id INT REFERENCES post(post_id),
vote_count INT
);

-- ! comment
CREATE TABLE comment (
comment_id SERIAL PRIMARY KEY,
comment_content TEXT,
user_id INT REFERENCES users(user_id),
post_id INT REFERENCES post(post_id)
);