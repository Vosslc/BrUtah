-- SELECT * FROM comment
-- INNER JOIN post
-- ON post.post_id = comment.post_id
-- WHERE post_id = ($1);

-- SELECT post_id FROM comment c
-- JOIN post p ON c.post_id = p.post_id
-- WHERE p.post_id = $1;

-- SELECT FROM comment
-- WHERE post_id = ($1);

SELECT * from comment where post_id = ($1)
order by comment_id DESC;
