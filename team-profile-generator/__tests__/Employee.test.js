
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const person = new Employee('Cody', 3215, 'gmail.com')

    expect(typeof person.name).toBe('string');
    expect(typeof person.id).toBe('number');
    expect(typeof person.email).toBe('string')
})

test("gets employee's name", () => {
    const person = new Employee('Cody', 3215, 'gmail.com');

    expect(person.getName()).toEqual(person.name);
})

test('gets employee id number', () => {
    const person = new Employee('Cody', 3215, 'gmail.com');
 

    expect(person.getId()).toEqual(person.id);
})

test('gets employee email', () => {
    const person = new Employee('Cody', 3215, 'gmail.com');

    expect(person.getEmail()).toEqual(person.email)
})

test('gets employee github info', () => {
    const person = new Employee('Cody', 3215, 'gmail.com');

    expect(person.getGit()).toEqual(person.gitHub)
})

test('gets employee role call', () => {
    const person = new Employee('Cody', 3215, 'gmail.com');

    expect(person.getRole()).toBe('Employee');
})