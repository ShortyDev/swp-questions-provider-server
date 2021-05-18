const express = require("express")
const app = express()

app.get("/new/random", (req, res) => {
    res.send("test")
})

app.listen(5000, () => {})