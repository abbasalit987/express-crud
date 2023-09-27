const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const user_route = require("./routes/user_route")
const sqlz = require("./util/database")

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hey!")
})

app.use(user_route)

sqlz.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server listening on http://localhost:${PORT}`)
        })
    })
    .catch((error) => console.error(error))
