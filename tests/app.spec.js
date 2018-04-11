import { expect } from 'chai';
import { App } from '../src/App/App';

describe('App', function(){

  let appInstance;

  beforeEach(function() {
    appInstance = new App();
  })

  describe('Smoke tests', function() {

    it('should exist an App module', function() {
      expect(appInstance).to.exist;
    })

    it('should exist a `render` method', function() {
      expect(appInstance.render).to.exist;
    })

  });
});
