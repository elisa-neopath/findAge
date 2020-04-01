const findAge = require('./findAge');

beforeAll(() => {
    findAge.list[0] = 'b tem 10 anos de idade';
    findAge.counter = 1;
})

test('add to list', () => {
    findAge.Parsing('a tem 20 anos de idade');
    expect(findAge.list).toEqual(['b tem 10 anos de idade', 'a tem 20 anos de idade']);
});

test('return 10', () => {
    expect(findAge.Responde('b')).toBe('10');
});

test('return 20', () => {
    expect(findAge.Responde('a')).toBe('20');
});

test('return not found', () => {
    expect(findAge.Responde('c')).toBe('not found');
});