const findAge = require('./findAge');

test('return 20', () => {
    expect(findAge.Responde('abc')).toBe('20');
});

test('return not found', () => {
    expect(findAge.Responde('ghi')).toBe('not found');
});