import { VersionPresenter } from '../../presenters/Version';

let versionPresenter: VersionPresenter;

beforeAll(() => {
  versionPresenter = {
    version_number: '1.0.0',
  };
});

describe('VersionPresenter', () => {
  describe('presenter properties', () => {
    it('should has correct property', () => {
      expect(versionPresenter).toHaveProperty('version_number');
      expect(versionPresenter.version_number).toBe('1.0.0');
    });
  });
});
