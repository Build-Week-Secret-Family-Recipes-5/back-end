const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const  db = require("./authDataModel")

router.post('/register', async (req, res, next) => {
    try {
      const { username, email } = req.body
  
      const user = await db.findBy({ username, email }).first()
      if(user) {
        return res.status(409).json({ message: "User is already taken!"})
      } else {
        const passHashing = bcrypt.hashSync(req.body.password, 16)
        res.status(201).json(await db.add({...req.body, password: passHashing}))
      }
  
    } catch(err) {
      next(err)
    }
  });

module.exports = router