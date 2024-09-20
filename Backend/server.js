const dotenv = require("dotenv");
dotenv.config();

const path = require("path");

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);


const ProductRoutes = require("./routes/product.route");


const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const _dirname = path.resolve();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/products", ProductRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
  });
}

app.listen(port, () => console.log(`Server start at http://localhost:${port}`));
