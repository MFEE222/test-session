var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// new 藏在 express 函式中
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  //   用 pug 樣板渲染
  res.render("error");
  //   回傳 json 物件
  res.json();
  //   .html 的路徑
  res.sendFile();
  //   回傳字串
  res.send();
});

module.exports = app;

// A
// B
// E1
// E2
// E3
// C

// function E1(req, res, next) {}

// app.use("", A);

// app.use("", B, E1, E2, E3);

// app.use("", E1);

// app.use("", E2);

// app.use("", E3);

// app.use("", C);
