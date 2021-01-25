import { Request, Response } from "express";

import { VersionPresenter as VersionPresenter } from "../presenters/Version";

export const get = (_: Request, response: Response) => {
  const presenter: VersionPresenter = {
    version_number: "1.0.0",
  };

  response.json(presenter);
};
