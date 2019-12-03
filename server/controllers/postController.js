module.exports = {

  getAllPost(req, res){
    const db = req.app.get('db')
    db.all_post()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })
  },

  addNewPost(req, res) {
    // console.log(req.body)
    const db = req.app.get('db')
    const {createTitle, createInput} = req.body
    db.create_new_post({
      title: createTitle,
      content: createInput
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })
  }
}