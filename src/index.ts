import express from "express";
import consola from "consola";

import { init } from "./configs";

const app: express.Express = init(express);

const host: string = process.env.API_HOST as string;
const port: number = (process.env.API_PORT as unknown) as number;

app.listen(port, host, () => {
  consola.success("Application is ready 🚀");
  console.info(`Listening at ${host}:${port}`);
});
