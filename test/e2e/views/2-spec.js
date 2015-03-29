var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


describe('Nike.com', function() {
  

  beforeEach(function() {
    browser.get('http://www.nike.com');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).to.eventually.equal('Nike.com');
  
  });

 
});