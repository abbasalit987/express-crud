const express = require("express")
const {
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/user_controller")

const router = express.Router()

router.post("/user", createUser)
router.get("/user/:id", getUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

module.exports = router
