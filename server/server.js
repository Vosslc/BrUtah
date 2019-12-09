require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
//!CONTROLLER IMPORTS
const authCtrl = require('./controllers/authController')
const postCtrl = require('./controllers/postController')
const commentCtrl = require('./controllers/commentController')
const votesCtrl = require('./controllers/votesController')
//!------------------
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env


const app = express()


app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET
}))

//! DATABASE & SERVER
massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DB connected')
  app.listen(SERVER_PORT, () =>
  console.log(`${SERVER_PORT} barrels of beer in all!`)
  )
})


//! AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
// app.delete('/auth/logout', authCtrl.logout)

// //! POST ENDPOINTS
app.get('/api/post', postCtrl.getAllPost)
app.get('/api/post/:id', postCtrl.getSelectedPost)
app.post('/api/post', postCtrl.addNewPost)
app.delete('/api/post/:id', postCtrl.deletePost)
app.put('/api/post/:id', postCtrl.updatePost)

// //! COMMENT ENDPOINTS
app.get('/api/comment', commentCtrl.getAllComments)
app.get('/api/comment/:id', commentCtrl.getAllCommentsForPost)
app.post('/api/comment', commentCtrl.addNewComment)
// app.post('/api/comment/:postid', commentCtrl.addNewComment)
// app.delete('/api/comment/:commentid', commentCtrl.deleteComment)

// //! VOTE ENDPOINTS
// app.get('/api/votes/:postid', votesCtrl.getAllVotes)
// app.put('/api/votes/:postid', votesCtrl.updateVotes)
