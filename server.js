"use strict";

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded"
  })
);
app.use(express.static("public"));

// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

//------------- GET ----------//

// Home page




app.get("/", (req, res) => {
  // let user_session = req.params['users_id'] // is that the field id in users table?
  // let templateVars = {} // main page content
  // if (!user_session){
  //   res.redirect("/login")
  // } else{
  //   res.redirect("/resources");
    // res.render("/resources", templateVars);
  // }

  knex
      .select("*")
      .from("users")
      .then((users) => {
        res.render("index", {users});
        // res.render("temp");
        // res.send(users)
    });
});



app.get("/login", (req, res) => {
  let templateVars = {
  };

  res.render("login", templateVars);
});

app.get("/register", (req, res) => {
  let templateVars = {
  };

  res.render("register", templateVars);
});

app.get("/resources", (req, res) => {
//       knex
//       .select("*")
//       .from("resources")
//       .then(results) => {
//         const templateVars= {resources: results}
//         res.render("index", templateVars);
// };

  res.render("index", templateVars);
});

app.get("/resources/:card_id", (req, res) => {
  let templateVars = {
  };

  res.render("one_resource", templateVars);
});

app.get("/resources/topic/:name", (req, res) => {
  let templateVars = {
  };
  res.render("index", templateVars);
});

app.get("/resources/search/:query", (req, res) => {
  let templateVars = {
  };
  res.render("index", templateVars);
});

app.get("/user/:id", (req, res) => {
  let templateVars = {
  };
  res.render("profile", templateVars);
});

app.get("/user/:id/my_resources", (req, res) => {
  let templateVars = {
  };

  res.render("my_resources", templateVars);
});

//------------- POST ----------//

app.post("/login", (req, res) => {
  res.redirect("/index");
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  knex("users")
    .insert({ username, email, password })
    .then(function(result) {
      console.log(result)
      // ({ success: true, message: "ok" });
      // res.redirect("/login");
    });
  // res.redirect("/login");
});

app.post("/logout", (req, res) => {

  res.redirect("/");
});

app.post("/resources", (req, res) => {

 const resourceObj =  {
    url: req.body.url,
    title: req.body.title,
    description: req.body.description,
    topic: req.body.value
  }

  knex ('resources')
  .insert(resourceObj)

  .into('resources')
  .then(response)
  .catch(err)
});

app.post("/user/:id", (req, res) => {
  res.redirect("/profile");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


// }
