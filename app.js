const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")
const { v4: uuidv4 } = require("uuid")
const router = require('./router')
const Student = require("./data")
const tt = require("./tt")

for (let i = 1; i <= 18; i++) {
    const x = "a" + i
    const add = new tt({
        batch: x,
        lecture00: "None",
        lecture01: "None",
        lecture02: "None",
        lecture03: "None",
        lecture04: "None",
        lecture05: "None",
        lecture06: "None",
        lecture07: "None",
        lecture08: "None",
        lecture09: "None",
        lecture10: "None",
        lecture11: "None",
        lecture12: "None",
        lecture13: "None",
        lecture14: "None",
        lecture15: "None",
        lecture16: "None",
        lecture17: "None",
        lecture18: "None",
        lecture19: "None",
        lecture20: "None",
        lecture21: "None",
        lecture22: "None",
        lecture23: "None",
        lecture24: "None",
        lecture25: "None",
        lecture26: "None",
        lecture27: "None",
        lecture28: "None",
        lecture29: "None",
        lecture30: "None",
        lecture31: "None",
        lecture32: "None",
        lecture33: "None",
        lecture34: "None",
        lecture35: "None",
        lecture36: "None",
        lecture37: "None",
        lecture38: "None",
        lecture39: "None",
        lecture40: "None",
        lecture41: "None",
        lecture42: "None",
        lecture43: "None",
        lecture44: "None",
        lecture45: "None",
        lecture46: "None",
        lecture47: "None",
        lecture48: "None",
        lecture49: "None",
    })
    add.save()
}

for (let i = 1; i <= 18; i++) {
    const x = "b" + i
    const add = new tt({
        batch: x,
        lecture00: "None",
        lecture01: "None",
        lecture02: "None",
        lecture03: "None",
        lecture04: "None",
        lecture05: "None",
        lecture06: "None",
        lecture07: "None",
        lecture08: "None",
        lecture09: "None",
        lecture10: "None",
        lecture11: "None",
        lecture12: "None",
        lecture13: "None",
        lecture14: "None",
        lecture15: "None",
        lecture16: "None",
        lecture17: "None",
        lecture18: "None",
        lecture19: "None",
        lecture20: "None",
        lecture21: "None",
        lecture22: "None",
        lecture23: "None",
        lecture24: "None",
        lecture25: "None",
        lecture26: "None",
        lecture27: "None",
        lecture28: "None",
        lecture29: "None",
        lecture30: "None",
        lecture31: "None",
        lecture32: "None",
        lecture33: "None",
        lecture34: "None",
        lecture35: "None",
        lecture36: "None",
        lecture37: "None",
        lecture38: "None",
        lecture39: "None",
        lecture40: "None",
        lecture41: "None",
        lecture42: "None",
        lecture43: "None",
        lecture44: "None",
        lecture45: "None",
        lecture46: "None",
        lecture47: "None",
        lecture48: "None",
        lecture49: "None",
    })
    add.save()
}

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static("public"))

mongoose.connect("mongodb+srv://developer-bhavil:123@cluster0.pbiym.mongodb.net/DTUStudentCompanion")

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

app.use('/route', router);

app.get("/", function (req, res) {
    res.render("login")
})

app.get("/register", function (req, res) {
    res.render("register")
})

app.post("/register", function (req, res) {
    try {
        const new_user = new Student({
            name: req.body.name,
            year: req.body.year,
            branch: req.body.branch,
            batch: req.body.batch,
            email: req.body.email,
            password: req.body.password
        })
        new_user.save()
        res.redirect("/")
    } catch (error) {
        console.log(error)
        res.redirect("/register")
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started!")
})