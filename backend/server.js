const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB Connection Error:");
  console.log(err);
});

const projectRoutes = require("./routes/projectRoutes");

console.log(projectRoutes);

app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});