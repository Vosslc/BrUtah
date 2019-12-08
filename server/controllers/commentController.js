module.exports = {
  getAllComments(req, res) {
    const db = req.app.get("db");
    db.all_comments()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addNewComment(req, res) {
    console.log("REQ.body", req.body);
    console.log("SESSION", req.session.user.user_id);
    const db = req.app.get("db");
    const { createComment, post_id } = req.body;
    const { user_id } = req.session.user;
    db.create_comment({
      comment_content: createComment,
      user_id: user_id,
      post_id: post_id
    })
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getAllCommentsForPost(req, res) {
    const db = req.app.get("db");
    console.log("PARAMS comment", req.params);
    // console.log("BODY comment",req.body)
    const { id } = req.params;
    db.select_comment(id)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
