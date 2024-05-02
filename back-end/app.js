const express = require("express");
const cors = require('cors');

const GadgetRoutes = require("./routes/gadget.route");

const app = express();
/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());
app.use(cors());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

/* Telling the server to use the routes in the GadgetRoutes file. */
app.use("/api", GadgetRoutes);

module.exports = app;

