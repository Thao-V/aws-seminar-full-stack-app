import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./student.route";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
