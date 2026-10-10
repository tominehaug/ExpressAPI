import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
