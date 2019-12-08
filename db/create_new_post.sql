INSERT INTO post (title, content, user_id)
VALUES (${title}, ${content}, ${user_id});
-- SELECT * FROM user
-- INNER JOIN post
-- ON user.user_id = post.user_id;
-- VALUES ($1, $2)

-- SELECT * FROM comment
-- JOIN post ON post.post_id = comment.post_id;
-- WHERE comment_content = $1;