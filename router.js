var express = require("express");
var router = express.Router();
const Student = require("./data")
const date = require("./date")
const _ = require("lodash")
const tt = require("./tt")
const index = require("./getIndex")

router.post("/login", function (req, res) {
    Student.findOne({ email: req.body.email, password: req.body.password }, function (err, results) {
        if (!err) {
            if (results) {
                req.session.user = req.body.email
                res.redirect("/route/dashboard")
            }
            else {
                res.end("Invalid Username or Password")
            }
        }
    })
})

router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        Student.findOne({ email: req.session.user }, function (err, results) {
            res.render('user_dashboard', { name: results.name, email: results.email, year: results.year, branch: results.branch, batch: results.batch })
        })
    } else {
        res.send("Unauthorized User")
    }
})

router.get("/dashboard/edit", (req, res) => {
    Student.findOne({ email: req.session.user }, function (err, results) {
        res.render('edit_profile', {
            name: results.name, email: results.email,
            year: results.year, branch: results.branch, batch: results.batch
        })
    })
})

router.post("/dashboard/edit", (req, res) => {
    Student.findOneAndUpdate({ email: req.body.email },
        {
            name: req.body.name, email: req.body.email, year: req.body.year,
            branch: req.body.branch, batch: req.body.batch
        }, function (err, results) {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        })
    setTimeout(function () {
        res.redirect("/route/dashboard")
    }, 1000)
})

router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            res.send("Error")
        } else {
            res.send("<h1>Logged out successfully</h1>")
        }
    })
})

router.get("/time-table", function (req, res) {
    res.render("time-table", { date: date.dateToday(), i: 0, j: 0 })
})

router.get("/time-table/:batch", function (req, res) {
    tt.findOne({ batch: req.params.batch }, function (err, results) {
        if (!err) {
            res.render("page", {
                batch: _.capitalize(req.params.batch),
                batch2: req.params.batch, data: results
            })
        }
    })
})

router.get("/time-table/:batch/edit", function (req, res) {
    tt.findOne({ batch: req.params.batch }, function (err, results) {
        if (!err) {
            res.render("edit_table", { batch: req.params.batch })
        }
    })
})

router.post("/time-table/:batch/edit", function (req, res) {
    tt.findOne({ batch: req.params.batch }, function (err, results) {
        var x = "lecture" + index.i(req.body.day) + index.j(req.body.slot)
        if (!err) {
            if (x === "lecture00") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture00: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture01") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture01: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture01") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture02: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture03") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture03: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture04") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture04: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture05") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture05: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture06") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture06: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture07") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture07: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture08") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture08: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture09") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture09: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture10") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture10: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture11") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture11: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture12") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture12: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture13") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture13: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture14") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture14: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture15") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture15: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture16") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture16: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture17") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture17: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture18") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture18: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture19") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture19: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture20") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture20: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture21") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture21: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture22") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture22: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture23") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture23: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture24") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture24: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture25") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture25: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture26") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture26: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture27") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture27: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture28") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture28: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture29") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture29: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture30") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture30: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture31") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture31: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture32") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture32: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture33") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture33: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture34") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture34: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture35") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture35: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture36") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture36: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture37") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture37: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture38") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture38: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture39") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture39: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture40") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture40: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture41") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture41: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture42") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture42: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture43") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture43: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture44") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture44: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture45") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture45: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture46") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture46: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture47") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture47: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture48") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture48: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
            else if (x === "lecture49") {
                tt.findOneAndUpdate({ batch: req.params.batch }, { lecture49: req.body.subject }, function (err, results) {
                    console.log("Updated")
                })
            }
        }
    })
    res.redirect("/route/time-table/" + req.params.batch)
})

module.exports = router