import express, { Express, json, urlencoded } from "express";
import * as Dotenv from "dotenv";
import Morgan from "morgan";
import Helmet from "helmet";
import CORS from "cors";

Dotenv.config();

import Router from "../routes/index";

export const App = (): Express => {
  return express()
    .use(
      Morgan(process.env.NODE_ENV === "development" ? "dev" : "short", {
        skip: () => process.env.NODE_ENV === "test",
      })
    )
    .use(Helmet())
    .use(json())
    .use(urlencoded({ extended: true }))
    .use(CORS())
    .use("/api", Router);
};
