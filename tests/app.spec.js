var expect = require('chai').expect;
var App = require('../src/App/App.js')/

describe('App', function(){

  describe('Smoke tests', function() {

    it('should exist an App module', function() {
      expect(App).to.exist;
    })
  });
});
