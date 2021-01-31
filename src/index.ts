import express from "express";
import consola from "consola";

import { App } from "./configs";

const app: express.Express = App();

const port: number = (process.env.API_PORT as unknown) as number;

app.listen(port, () => {
  consola.success("Application is ready 🚀");
  console.info(`Listening at port ${port}`);
});
