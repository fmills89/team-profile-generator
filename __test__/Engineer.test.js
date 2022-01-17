const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const employee = new Engineer('Dave', '5', 'dave@gmail.com', 'dave')

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('5');
    expect(employee.email).toBe('dave@gmail.com');
    expect(employee.github).toBe('dave');
});

test('gets engineer github', () => {
    const employee = new Engineer('Dave', '5','dave@gmail.com', 'dave');

    expect(employee.getGithub()).toEqual(expect.stringContaining(employee.github));
});

test('get engineer role', () => {
    const employee = new Engineer('Dave', '5','dave@gmail.com', 'dave');

    expect(employee.getRole()).toEqual(expect.stringContaining('Engineer'));
})