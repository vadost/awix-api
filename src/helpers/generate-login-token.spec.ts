import { generateLoginToken } from './generate-login-token';

describe('helpers: #generateLoginToken', () => {
  it('should return string', () => {
    expect(typeof generateLoginToken()).toBe('string');
  });

  it('should return default length 64', () => {
    expect(generateLoginToken().length).toBe(64);
  });

  it('should return length', () => {
    expect(generateLoginToken(128).length).toBe(128);
  });
});
