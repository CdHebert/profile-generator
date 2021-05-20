const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const person = new Manager('Cody', 3215, 'gmail.com')

    expect(typeof person.name).toBe('string');
    expect(typeof person.id).toBe('number');
    expect(typeof person.email).toBe('string')
})

test("gets manager name", () => {
    const person = new Manager('Cody', 3215, 'gmail.com');

    expect(person.getName()).toEqual(person.name);
})

test('gets manager id number', () => {
    const person = new Manager('Cody', 3215, 'gmail.com');
 

    expect(person.getId()).toEqual(person.id);
})

test('gets manager email', () => {
    const person = new Manager('Cody', 3215, 'gmail.com');

    expect(person.getEmail()).toEqual(person.email)
})

test('gets manager github info', () => {
    const person = new Manager('Cody', 3215, 'gmail.com');

    expect(person.getGit()).toEqual(person.gitHub)
})

test('gets manger office number', () => {
    const person = new Manager('Cody', 3215, 'gmail.com');

    expect(person.getOffice()).toEqual(person.officeNumber)
})

test('gets manager role call', () => {
    const person = new Manager('Cody', 3215, 'gmail.com');

    expect(person.getRole()).toBe('Manager');
})