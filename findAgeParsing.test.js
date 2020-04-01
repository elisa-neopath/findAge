const findAge = require('./findAge');

test('parse phrase', () => {
    findAge.Parsing('abc tem 20 anos de idade');
    expect(findAge.list[0]).toEqual(['abc', '20']);
});