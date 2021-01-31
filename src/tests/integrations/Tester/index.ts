import Supertest, {
  SuperTest,
  Test,
  Request as SuperTestRequest,
  Response as SuperTestResponse,
// eslint-disable-next-line import/no-extraneous-dependencies
} from 'supertest';

import App from '../../../configs';

class Tester {
  api: SuperTest<Test>;

  constructor() {
    this.api = Supertest(App());
  }
}

export type Request = SuperTestRequest;
export type Response = SuperTestResponse;
export const { api } = new Tester();
