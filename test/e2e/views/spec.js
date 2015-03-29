var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


describe('Twitter.com', function() {
  

  beforeEach(function() {
    browser.get('http://www.twitter.com');
  });

  it('should have a title [#P2]', function() {
    expect(browser.getTitle()).to.eventually.contain('Twitter');
  
  });

 
});