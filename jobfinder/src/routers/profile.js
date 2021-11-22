const express = require('express')
const Profile = require('../models/profile')
const router = new express.Router() // create new set of routes related to user model
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const bcrypt = require('bcryptjs')

Profile.sync().then(result => { //sync table with model attributes
  console.log("The table for the User model was created")
}).catch(err => {
  console.log(err)
})
// create route for create new users
router.post('/profile', async (req, res) => {
  const user = new Profile(req.body)

  try {
      await profile.save()
      res.status(201).send({ user })
  } catch (err) {
      res.status(400).send(err)
  }
})

generateAuthToken = async function (user) {
  
  const token = jwt.sign({ id: profile.id.toString() }, 'thisIsAwesome')

  profile.token = token
  await profile.save()

  return token
}

//export set of routes
module.exports = router
