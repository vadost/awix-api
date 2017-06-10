import { requestApi } from '../helpers/request';

describe('POST /authenticate', () => {
  it('Unauthorized request', (done: DoneFn) => {
    requestApi.post('/authenticate', (response, body) => {
      expect(response.statusCode).toBe(401);
      expect(response.statusMessage).toBe('Unauthorized');
      expect(body.error).toBeDefined();
      done();
    });
  });
});
