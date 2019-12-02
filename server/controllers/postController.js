module.exports = {
  addNewPost(req, res) {
    const db = req.app.get('db')
    const {title, content} = req.body
    db.create_new_post({
      title: title,
      content: content
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })
  }
}