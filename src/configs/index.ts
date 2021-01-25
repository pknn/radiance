import { Express, json, urlencoded } from "express";
import * as Dotenv from "dotenv";
import Morgan from "morgan";
import Helmet from "helmet";
import CORS from "cors";

import Router from "../routes/index";

export const init = (express: () => Express): Express => {
  Dotenv.config();
  Morgan(process.env.NODE_ENV === "development" ? "combined" : "short");
  return express()
    .use(Morgan(process.env.NODE_ENV === "development" ? "combined" : "short"))
    .use(Helmet())
    .use(json())
    .use(urlencoded({ extended: true }))
    .use(CORS())
    .use("/api", Router);
};
