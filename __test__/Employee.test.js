const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Forrest', '1', 'forrestfires@gmail.com');

    expect(employee.name).toBe('Forrest');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('forrestfires@gmail.com');

});

test('gets an employees name', () => {
    const employee = new Employee('Forrest');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('gets employees id', () => {
    const employee = new Employee('Forrest', '1', 'forrestfires@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('get employee email', () => {
    const employee = new Employee('Forrest', '1', 'forrestfires@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

module.exports = Employee