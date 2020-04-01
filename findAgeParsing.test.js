const findAge = require('./findAge');

afterAll(() => {
    findAge.list = [];
    findAge.counter = 0;
})

test('parse phrase', () => {
    findAge.Parsing('joao tem 20 anos de idade');
    expect(findAge.list[0]).toEqual(['joao', '20']);
});

test('parse phrase', () => {
    findAge.Parsing('maria tem 30 anos de idade');
    expect(findAge.list[1]).toEqual(['maria', '30']);
});