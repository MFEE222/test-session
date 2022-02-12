var express = require("express");
var router = express.Router();
var expressSession = require("express-session");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("A");
  res.render("index", { title: "EEEExpress", whois: req.session.who });
});

router.post("/login", function (req, res, next) {
  console.log("B");
  req.session.who = req.body.who;
  res.render("login", { title: "EEEExpress", whois: req.session.who });
  // next();
});

router.get("/login", function (req, res, next) {
  console.log("C");
  res.render("login", { title: "EEEExpress", whois: req.session.who });
});

module.exports = router;

// function A(req, res, next) {
//   req.abc = 123;
//   next();
// }

// function B(req, res, next) {
//   console.log("req.abc :>> ", req.abc);
//   next();
// }
