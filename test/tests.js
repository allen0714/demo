var expect = chai.expect;
var toDecimal = IP.toDecimal;
describe('ip convert', function() {
  it('172.168.5.1 will output 2896692481 as required', function() {
    expect(toDecimal('172.168.5.1')).to.equal(2896692481);
  });

  it('172 . 168.5.1 will output 2896692481 as required as well.(input string with spaces between digit and dot is valid)', function() {
    expect(toDecimal('172 . 168.5.1')).to.equal(2896692481);
  });

  it('17 2.168.5.1 will get an error.(input string with spaces between digits is not valid and will report an error)', function() {
    expect(toDecimal,'17 2.168.5.1').to.throw();
  });

  it('abc.123.abc.345 will get an error.(invalid ip-like input string will report an error)',function(){
    expect(toDecimal,'abc.123.abc.345').to.throw();
  });

  it('120.20.20.256 will get an error.(illegal input string will report an error)',function(){
    expect(toDecimal,'abc.123.abc.345').to.throw();
  });

  it('abdcclkdlkdk will get an error.(invalid input string will report an error)',function(){
    expect(toDecimal,'abdcclkdlkdk').to.throw();
  });

  it('021.1.2.1 will get an error.(number start with 0 is not supported and will report an error)',function(){
    expect(toDecimal,'021.1.2.1').to.throw();
  });

});