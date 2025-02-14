// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import websiteRoutes from "./routes/website";

// dotenv.config();

// const app = express();

// app.use(cors({ origin: true, credentials: true }));

// app.use(express.json());

// app.use("/api", websiteRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const websiteRoutes = require("./routes/website");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", websiteRoutes);

module.exports = app;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
