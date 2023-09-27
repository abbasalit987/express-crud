const User = require("../model/user_model")

const createUser = async (req, res) => {
    try {
        console.log("Creating User")
        console.log(req.body)
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            res.status(404).json({ error: "User not found" })
        } else {
            res.json(user)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            res.status(404).json({ error: "User not found" })
        } else {
            await user.update(req.body)
            res.json(user)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            res.status(404).json({ error: "User not found" })
        } else {
            await user.destroy()
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
}
