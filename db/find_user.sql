SELECT count(*) FROM users
WHERE username = $1;

-- SELECT * FROM post
-- INNER JOIN users
-- ON users.user_id = post.user_id
-- WHERE profile_img = $2;
