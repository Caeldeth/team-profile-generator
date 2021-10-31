import { expect, test } from '@jest/globals';
import Employee from '../lib/Employee';

// need test for making new employee object
test('Can create new employee object', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

// need test for setting employee name
test('Can set name via constructor', () => {
    const name = "John";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

// need test for setting employee id
test('Can set employee id via constructor', () => {
    const testId = "42";
    const emp = new Employee("John", testId);
    expect(emp.id).toBe(testId);
});

// need test for setting employee email

// need test to see if name can be fetched

// need test to see if email can be fetched

// need test to see if id can be fetched

// need test to confirm getrole() returns employee

