import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/products/", productRoute);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
