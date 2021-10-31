const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

//need test to set office number
test('Can set office number via constructor', () => {
    const testOffice = '686'
    const mgr = new Manager('Daphne', '666', 'mgrname@domain.com', testOffice);
    expect(mgr.officeNumber).toBe(testOffice);
})

//need test to check getRole returns manager
test('getRole should return "Manager" for managers', () => {
    const testRole = "Manager";
    const mgr = new Manager('Daphne', '666', 'mgrname@domain.com', '686');
    expect(mgr.getRole()).toBe(testRole);
})

//need test to get office number
test('Can fetch office number', () => {
    const testOffice = '686';
    const mgr = new Manager('Daphne', '666', 'mgrname@domain.com', testOffice);
    expect(mgr.getOfficeNumber()).toBe(testOffice);
})
//need test to get name
test('Can fetch manager name', () => {
    const testName = 'Daphne';
    const mgr = new Manager(testName);
    expect(mgr.getName()).toBe(testName);
});

//need test to get id
test('Can fetch manager id', () => {
    const testId = '666';
    const mgr = new Manager('Daphne', testId);
    expect(mgr.getId()).toBe(testId);
});

//need test to get email
test('Can fetch manager email', () => {
    const testEmail = 'mgrname@domain.com';
    const mgr = new Manager('Daphne', '666', testEmail);
    expect(mgr.getEmail()).toBe(testEmail);
});