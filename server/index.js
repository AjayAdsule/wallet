import express from "express";
import dotEnv from "dotenv";

dotEnv.config();
const app = express();

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});
