const findAge = require('./findAge');

test('parse phrase', () => {
    findAge.Parsing('abc def tem 20 anos de idade');
    expect(findAge.list[0]).toEqual(['abc def', '20']);
});

test('return 20', () => {
    expect(findAge.Responde('abc')).toBe('20');
});

test('return not found', () => {
    expect(findAge.Responde('ghi')).toBe('not found');
});