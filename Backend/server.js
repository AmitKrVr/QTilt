import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

const app = express();

const port = process.env.PORT || 4000;

connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello From Backend");
});

app.listen(port, () => {
  console.log(`Server Started on PORT http://localhost:${port}`);
});
