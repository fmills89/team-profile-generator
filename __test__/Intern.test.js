const Intern = require('../lib/Intern')

test('create a new intern object', () => {
    const employee = new Intern('John', '10', 'john@gmail.com', 'UTSA');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('john@gmail.com');
    expect(employee.school).toBe('UTSA');
});

test('retrieve intern school', () => {
    const employee = new Intern('John', '10', 'john@gmail.com', 'UTSA');

    expect(employee.getSchool()).toEqual(expect.stringContaining(employee.school));
});

test('intern role', () => {
    const employee = new Intern('John', '10', 'john@gmail.com', 'UTSA');

    expect(employee.getRole()).toEqual(expect.stringContaining("Intern"));
});