
const Manager = require('../lib/Manager');

test('create manager object', () => {
    const employee = new Manager("Don", "9", "don@gmail.com", "23")

    expect(employee.name).toBe('Don');
    expect(employee.id).toBe('9');
    expect(employee.email).toBe('don@gmail.com');
    expect(employee.officeNumber).toBe('23');
});

test('get office number', () => {
    const employee = new Manager ("Don", "9", "don@gmail.com", "23");
    
    expect(employee.getOfficeNumber()).toEqual(expect.stringContaining(employee.officeNumber));
});

test('getRole', () => {
    const employee = new Manager("Don", "9", "don@gmail.com", "23");

    expect(employee.getRole()).toEqual(expect.stringContaining("Manager"));
});

