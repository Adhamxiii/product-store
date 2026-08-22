const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const ProductRoutes = require("./routes/product.route");

mongoose.connect(process.env.MONGO_URI);

const app = express();
const port = process.env.PORT || 8000;
const _dirname = path.resolve();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/products", ProductRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
  });
}

app.listen(port, "0.0.0.0", () =>
  console.log(`Server started on port ${port}`)
);
