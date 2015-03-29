var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;



describe('Google.com', function() {
  it('should have a title [#P1] ', function() {
    browser.get('http://www.google.com');
    
    expect(browser.getTitle()).to.eventually.equal('Google');
  

  
  });
});