UPDATE post
SET title = $1,
    content = $2

WHERE post_id = $3;
