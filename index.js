const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const jwt = require("jsonwebtoken");
const { connectDB } = require("./database/mongodb");
const cors = require("cors");
app.use(cors());

// Connect to MongoDB
connectDB();

// Mount the routes
app.get("/", require("./routes/index"));
app.use("/api/", require("./routes/collection"));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
