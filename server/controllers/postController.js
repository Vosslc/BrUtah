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
  },
  updatePost(req, res) {
    // console.log(req.body)
    // console.log(req.params)
    const db = req.app.get("db");
    const { id } = req.params;
    const { createTitle, createInput } = req.body;
    
    db.update_post(createTitle, createInput, id)
    .then(result => {
      // console.log(result)
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deletePost(req, res) {
    const db = req.app.get('db');
    // console.log(req.params.id)
    db.delete_post(req.params.id)
    .then(result => {
        res.status(200).send(result)
    }).catch(err => console.log(err))
  }
};
