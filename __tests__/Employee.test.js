const Employee = require('../lib/Employee');

// need test for making new employee object
test('Can create new employee object', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

// need test for setting employee name
test('Can set name via constructor', () => {
    const name = 'John';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

// need test for setting employee id
test('Can set employee id via constructor', () => {
    const testId = '42';
    const emp = new Employee('John', testId);
    expect(emp.id).toBe(testId);
});

// need test for setting employee email
test('Can set employee email via constructor', () => {
    const testEmail = 'name@domain.com';
    const emp = new Employee('John', '42', testEmail);
    expect(emp.email).toBe(testEmail);
});

// need test to see if name can be fetched
test('Can fetch employee name', () => {
    const testName = 'John';
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
});

// need test to see if email can be fetched
test('Can fetch employee email', () => {
    const testEmail = 'name@domain.com';
    const emp = new Employee('John', '42', testEmail);
    expect(emp.getEmail()).toBe(testEmail);
});

// need test to see if id can be fetched
test('Can fetch employee id', () => {
    const testId = '42';
    const emp = new Employee('John', testId);
    expect(emp.getId()).toBe(testId);
});

// need test to confirm getrole() returns employee
test('Can correctly fetch employee role', () => {
    const testRole = 'Employee';
    const emp = new Employee('John', '42', 'name@domain.com');
    expect(emp.getRole()).toBe(testRole);
});
