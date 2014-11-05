var expect = require('chai').expect;
var hints = require('../lib/hints');
  
describe('hints', function () {
  describe('.parse', function () {
    it('should match the first hint in message', function () {
      var message = 'making some changes. OK strider: test this ! OK strider: ignore this.';
      expect(hints.parse(message)).to.eql('test this');
    });

    it('should handle newline', function () {
      var message = 'making some changes\nok strider: test this!\n\nsome more text';
      expect(hints.parse(message)).to.eql('test this');
    });

    it('should return undefined with no hints in message', function () {
      var message = 'making some changes';
      expect(hints.parse(message)).to.eql(undefined);
    });
    

    it('should require an exclamation', function () {
      var message = 'making some changes\nok strider: test this';
      expect(hints.parse(message)).to.eql(undefined);
    });

    it('should return undefined when input is undefined', function () {
      expect(hints.parse(undefined)).to.eql(undefined);
    });
  });
});
