import express from "express";

import errorPageNotFound from "./middlewares/errorPageNotFound";
import router from "./routes/code.routes";

require("dotenv/config");

const app = express();

app.use(express.json());
app.use(router);
app.use(errorPageNotFound);

app.listen(process.env.PORT || 8080, () => console.log("Server is running!"));
