SELECT * FROM users u
JOIN user_hash uh ON u.user_id = uh.user_id
WHERE username = $1