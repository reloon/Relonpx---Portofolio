import express from "express";
import cors from "cors";
import expressLayouts from "express-ejs-layouts";
import indexRoute from "./routes/indexRoute.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(expressLayouts);
app.use(indexRoute);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
