const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const person = new Engineer('Cody', 3215, 'gmail.com')

    expect(typeof person.name).toBe('string');
    expect(typeof person.id).toBe('number');
    expect(typeof person.email).toBe('string')
})

test("gets engineer name", () => {
    const person = new Engineer('Cody', 3215, 'gmail.com');

    expect(person.getName()).toEqual(person.name);
})

test('gets engineer id number', () => {
    const person = new Engineer('Cody', 3215, 'gmail.com');
 

    expect(person.getId()).toEqual(person.id);
})

test('gets engineer email', () => {
    const person = new Engineer('Cody', 3215, 'gmail.com');

    expect(person.getEmail()).toEqual(person.email)
})

test('gets engineer github info', () => {
    const person = new Engineer('Cody', 3215, 'gmail.com');

    expect(person.getGit()).toEqual(person.gitHub)
})

test('gets engineer role call', () => {
    const person = new Engineer('Cody', 3215, 'gmail.com');

    expect(person.getRole()).toBe('Engineer');
})