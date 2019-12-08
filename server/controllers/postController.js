module.exports = {
  getAllPost(req, res) {
    const db = req.app.get("db");
    db.all_post()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  addNewPost(req, res) {
    // console.log(req.body)
    // console.log(req.session)
    const db = req.app.get("db");
    const { createTitle, createInput } = req.body;
    const { user_id } = req.session.user;
    db.create_new_post({
      title: createTitle,
      content: createInput,
      user_id: user_id
    })
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getSelectedPost(req, res) {
    const db = req.app.get("db");
    console.log("PARAMS POST", req.params);
    const { id } = req.params;
    db.select_post(id)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
