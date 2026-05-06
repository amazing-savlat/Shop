import express from "express";
import getGadgets from "./routes/GET/getGadgets.js";
import getKids from "./routes/GET/getKids.js";
import getSports from "./routes/GET/getSports.js";
import middleware from "./middleware/access.js";

const app = express();

app.use(middleware);      
app.use(express.json());
app.use(getGadgets);      
app.use(getKids);      
app.use(getSports);      

app.listen(5500, () => {
  console.log("Server running on port 5500");
});