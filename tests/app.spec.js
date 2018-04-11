import { expect } from 'chai';
import { App } from '../src/App/App';

describe('App', function(){

  let appInstance,
  people;

  beforeEach(function() {
    appInstance = new App();
    people = [
      ['elsewhere@elsewhere.com', 'Rodrigo', 'Vallades', 'VIP', '555-111-000', 5000],
      ['something@somewhere.com', 'Joe', 'Smith Jr.', 'Important', '781-633-2222', 120]
    ];
  })

  describe('Smoke tests', function() {

    it('should exist an "App" module', function() {
      expect(appInstance).to.exist;
    })

    it('should exist a "render" method', function() {
      expect(appInstance.render).to.exist;
      expect(appInstance.render).to.be.a('function');
    })

  });

  describe('Table render', function() {

    it('should return "null" when no data passed to render', function() {
      expect(appInstance.render()).to.be.null
    })

    it('should return a DataTable instance when data is passes', function() {
      appInstance = new App({
        people: people
      });
      console.log('Will fail because jQuery is not running on the browser')
      expect(appInstance.render(people)).to.be.a('function')
    })

  });


});
