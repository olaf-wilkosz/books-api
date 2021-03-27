const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if there is no argument provided', () => {
    expect(formatFullname(null)).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname('')).to.equal('Error');
    // expect(formatFullname(' ')).to.equal('Error');
  });

  it('should return an error if "fullName" is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname(function () { })).to.equal('Error');
  });

  it('should return an error if format of received data is different than the pattern', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });

  it('should return correct casing no matter what is the case of letters received', () => {
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.equal('John Doe');
  });
});