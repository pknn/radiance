import { api, Response } from './Tester';

interface VersionResponseBody {
  version_number: string;
}

const urlEndpoint = '/api/version';

describe('/api/version', () => {
  describe('GET /', () => {
    it('should be success and return response', async () => {
      const expectedResponseBody: VersionResponseBody = {
        version_number: '1.0.0',
      };
      const response: Response = await api.get(urlEndpoint);

      expect(response.body).toBeDefined();
      expect(response.status).toEqual(200);
      expect(response.body).toMatchObject(expectedResponseBody);
    });
  });
});
