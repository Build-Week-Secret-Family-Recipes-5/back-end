const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const db = require("./authDataModel")

router.post('/register', async (req, res, next) => {
    try {
        const { username, email } = req.body

        const user = await db.findBy({ username, email }).first()
        if (user) {
            return res.status(409).json({ message: "User is already taken!" })
        } else {
            const passHashing = bcrypt.hashSync(req.body.password, 16)
            res.status(201).json(await db.add({ ...req.body, password: passHashing }))
        }

    } catch (err) {
        next(err)
    }
});

router.post('/login', async (req, res, next) => {
    const authError = { message: "Invalid credentials!" }
    try {
        const user = await db.findBy({ username: req.body.username }).first()
        if (!user) {
            return res.status(401).json(authError)
        }

        const passwordValid = await bcrypt.compare(req.body.password, user.password)
        console.log("User logged in:", req.body.password, user.password)

        if (!passwordValid) {
            return res.status(401).json(authError)
        }

        const tokenPayload = {
            userId: user.id
        }

        res.cookie("token", jwt.sign(tokenPayload, process.env.JWT_SECRET))

        // res.status(200).json({ message: `You are logged in ${user.username}`})
        res.status(200).json({ message: "You logged in successfuly!" })

    } catch (err) {
        next(err)
    }
});

// router.get("/logout", (req, res) => {
//     if (req.session) {
//         req.session.destroy((err) => {
//             if (err) {
//                 res.json({message: "Can't log out!"})
//             } else {
//                 res.json({message: "Logged out successfully!"})
//             }
//         })
//     }
// })

module.exports = router