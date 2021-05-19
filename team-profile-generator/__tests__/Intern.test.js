const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const person = new Intern('Cody', 3215, 'gmail.com')

    expect(typeof person.name).toBe('string');
    expect(typeof person.id).toBe('number');
    expect(typeof person.email).toBe('string')
})

test("gets intern name", () => {
    const person = new Intern('Cody', 3215, 'gmail.com');

    expect(person.getName()).toEqual(person.name);
})

test('gets intern id number', () => {
    const person = new Intern('Cody', 3215, 'gmail.com');
 

    expect(person.getId()).toEqual(person.id);
})

test('gets intern email', () => {
    const person = new Intern('Cody', 3215, 'gmail.com');

    expect(person.getEmail()).toEqual(person.email)
})

test('gets intern github info', () => {
    const person = new Intern('Cody', 3215, 'gmail.com');

    expect(person.getGit()).toEqual(person.gitHub)
})

test('gets intern role call', () => {
    const person = new Intern('Cody', 3215, 'gmail.com');

    expect(person.getRole()).toBe('Intern');
})