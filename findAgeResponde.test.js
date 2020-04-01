const findAge = require('./findAge');

beforeAll(() => {
    findAge.Parsing('abc tem 20 anos de idade');
    findAge.Parsing('def tem 10 anos de idade');
    findAge.Parsing('ghi tem 30 anos de idade');
});

afterAll(() => {
    findAge.list = [];
    findAge.counter = 0;
});

test('return 20', () => {
    expect(findAge.Responde('abc')).toBe('20');
});

test('return 10', () => {
    expect(findAge.Responde('def')).toBe('10');
});

test('return 30', () => {
    expect(findAge.Responde('ghi')).toBe('30');
});

test('return not found', () => {
    expect(findAge.Responde('jkl')).toBe('not found');
});