import { Request, Response } from 'express';

import { VersionPresenter } from '../presenters/Version';

// eslint-disable-next-line import/prefer-default-export
export const get = (_: Request, response: Response) => {
  const presenter: VersionPresenter = {
    version_number: '1.0.0',
  };

  response.json(presenter);
};
