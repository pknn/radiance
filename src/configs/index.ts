import { Express } from "express";
import * as Dotenv from "dotenv";
import LogRocket from "logrocket";
import Morgan from "morgan";

import Router from "../routes/index";

export const init = (express: () => Express): Express => {
  Dotenv.config();
  LogRocket.init("aiknbx/radiance");
  Morgan(process.env.NODE_ENV === "development" ? "combined" : "short");
  return express().use("/api", Router);
};
